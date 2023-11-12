import { Token, TokenType } from "../interface";

export interface ColorConfig {
    comments: Color;
    strings: Color;
    numbers: Color;
    keywords: Color;
    builtins: Color;
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
    [TokenType.Builtin]: "builtins",
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

export interface SimpleHtmlConfig {
    links?: boolean;
}

export function simpleHtml(tokens: ColoredToken[], cfg: SimpleHtmlConfig = {}) {
    let html = "";
    cfg = {
        links: true,
        ...cfg,
    };
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
    if (cfg.links) {
        html = html.replace(
            /(https?:\/\/[^\s<>]+)/g,
            '<a href="$1" target="_blank" rel="noopener noreferrer" style="text-decoration:none;color:inherit;:hover:{text-decoration:underline}">$1</a>',
        );
    }
    return html;
}

export { GithubDark } from "./github-dark";
export { AtomOneDark } from "./atom-one-dark";
