import { Token, TokenType } from "../interface";

export interface ColorConfig {
    comments: Color;
    strings: Color;
    numbers: Color;
    keywords: Color;
    operators: Color;
    identifiers: Color;
    punctuations: Color;
    others: Color;
    bgColor?: string;
}

export interface Color {
    value?: string;
    bgValue?: string;
    class?: string;
}

export type ColoredToken = Color & { text: string };

const tokenTypeMapping = {
    [TokenType.Comment]: "comments",
    [TokenType.String]: "strings",
    [TokenType.Number]: "numbers",
    [TokenType.Keyword]: "keywords",
    [TokenType.Operator]: "operators",
    [TokenType.Identifier]: "identifiers",
    [TokenType.Punctuation]: "punctuations",
    [TokenType.Other]: "others",
} as const;

export function colorlize(tokens: Token[], settings: ColorConfig) {
    const colored: ColoredToken[] = [];
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const color = settings[tokenTypeMapping[token.type]];
        colored.push({
            ...color,
            text: token.value,
        });
    }
    return [colored, settings.bgColor] as const;
}

function escapeHtml(str: string) {
    return str.replace(/[&'`"<>]/g, (match) => {
        return (
            {
                "&": "&amp;",
                "'": "&#x27;",
                "`": "&#x60;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;",
            }[match] || ""
        );
    });
}

export function simpleHtml(tokens: ColoredToken[], bg?: string) {
    let html = "";
    for (const token of tokens) {
        const classValue = token.class
            ? ` class="${escapeHtml(token.class)}"`
            : "";
        const style = token.value
            ? token.bgValue
                ? ` style="color: ${escapeHtml(
                      token.value,
                  )}; background-color: ${escapeHtml(token.bgValue)};"`
                : ` style="color: ${escapeHtml(token.value)};"`
            : token.bgValue
            ? ` style="background-color: ${escapeHtml(token.bgValue)};"`
            : "";
        html += `<span${classValue}${style}>${escapeHtml(token.text)}</span>`;
    }
    return `<pre${
        bg ? ` style="background-color: ${escapeHtml(bg)}"` : ""
    }><code>${html}</code></pre>`;
}

export { DARK } from "./dark";
export { DISCORD } from "./discord";
