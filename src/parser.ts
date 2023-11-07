import { Lang, Token, TokenType } from "./interface";

export function detectLang(source_path: string, lang: Lang[]) {
    for (const l of lang) {
        const found = source_path.match(l.ext);
        if (found) {
            return [l, found[0]] as const;
        }
    }
    return null;
}

export function parse(raw_source: string, lang: Lang) {
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
    for (const whitespace of lang.whitespaces) {
        source = replace(source, whitespace, TokenType.Whitespace);
    }
    return source;
}

function replace(source: Token[], pattern: string, type: TokenType) {
    let new_source = [];
    for (const token of source) {
        if (token.type == TokenType.Other) {
            let start = 0;
            for (const found of token.value.matchAll(
                new RegExp(pattern, "g"),
            )) {
                const foundIndex = found.index || 0;
                let end = foundIndex + found[0].length;
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
            new_source.push(token);
        }
    }
    return new_source;
}
