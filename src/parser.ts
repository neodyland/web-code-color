import { Lang, Token, TokenType, Match } from "./interface";

export function detectLang(source_path: string, lang: Lang[]) {
    for (const l of lang) {
        const found = source_path.match(l.ext);
        if (found) {
            return [l, found[0]] as const;
        }
    }
    return null;
}

function escapeHtml(code: string) {
    return code.replace(/[<>]/g, (match) => {
        return (
            {
                "<": "&lt;",
                ">": "&gt;",
            }[match] || ""
        );
    });
}

export function parse(raw_source: string, lang: Lang, escape = true) {
    let source = [
        {
            type: TokenType.Other,
            value: raw_source,
        },
    ];
    for (const comment of lang.comments) {
        source = replace(source, comment, TokenType.Comment);
    }
    for (const string of lang.strings) {
        source = replace(source, string, TokenType.String);
    }
    for (const number of lang.numbers) {
        source = replace(source, number, TokenType.Number);
    }
    for (const keyword of lang.keywords) {
        source = replace(source, keyword, TokenType.Keyword);
    }
    for (const operator of lang.operators) {
        source = replace(source, operator, TokenType.Operator);
    }
    for (const identifier of lang.identifiers) {
        source = replace(source, identifier, TokenType.Identifier);
    }
    for (const punctuation of lang.punctuations) {
        source = replace(source, punctuation, TokenType.Punctuation);
    }
    return source.map((token) => {
        return {
            type: token.type,
            value: escape ? escapeHtml(token.value) : token.value,
        };
    });
}

function transformPattern(pattern: Match) {
    if (typeof pattern == "string") {
        return {
            is_regex: true,
            value: pattern,
        } as const;
    } else {
        return {
            is_regex: false,
            value: pattern.value,
        } as const;
    }
}

function replace(source: Token[], pattern: Match, type: TokenType) {
    let new_source = [];
    for (const token of source) {
        if (token.type == TokenType.Other) {
            let start = 0;
            const pat = transformPattern(pattern);
            if (pat.is_regex) {
                for (const found of token.value.matchAll(
                    new RegExp(pat.value, "g"),
                )) {
                    const foundValue = found[1] || found[0];
                    const foundIndex = found.index || 0;
                    let end = foundIndex + foundValue.length;
                    if (start < foundIndex) {
                        new_source.push({
                            type: TokenType.Other,
                            value: token.value.slice(start, foundIndex),
                        });
                    }
                    new_source.push({
                        type,
                        value: token.value.slice(foundIndex, end),
                    });
                    start = end;
                }
                if (start < token.value.length) {
                    new_source.push({
                        type: TokenType.Other,
                        value: token.value.slice(start),
                    });
                }
            } else {
                // replace all matching strings
                while (true) {
                    const foundIndex = token.value.indexOf(pat.value);
                    if (foundIndex < 0) {
                        break;
                    }
                    new_source.push({
                        type: TokenType.Other,
                        value: token.value.slice(0, foundIndex),
                    });
                    new_source.push({
                        type,
                        value: token.value.slice(
                            foundIndex,
                            foundIndex + pat.value.length,
                        ),
                    });
                    token.value = token.value.slice(
                        foundIndex + pat.value.length,
                    );
                }
                if (token.value.length > 0) {
                    new_source.push(token);
                }
            }
        } else {
            new_source.push(token);
        }
    }
    return new_source;
}
