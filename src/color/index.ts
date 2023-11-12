import { Token, TokenType } from "../interface";
import { autoparse, parse } from "../";
import { escapeHtml } from "../util";
import { Languages } from "../lang";

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

export interface SimpleHtmlConfig {
    links?: boolean;
}

export function simpleHtml(
    tokens: ColoredToken[],
    cfg: SimpleHtmlConfig = {
        links: true,
    },
) {
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
    if (cfg.links) {
        html = html.replace(
            /(https?:\/\/[^\s<>]+)/g,
            '<a href="$1" target="_blank" rel="noopener noreferrer" style="text-decoration:none;color:inherit;:hover:{text-decoration:underline}">$1</a>',
        );
    }
    return html;
}

export function verySimple(name: string, text: string, theme: string) {
    const tokens = autoparse(name, text)?.[1];
    if (!tokens) throw new Error("No matching language");
    const [coloredTokens, bg] = colorlize(tokens, selectTheme(theme));
    const html = simpleHtml(coloredTokens);
    return `<pre style="background-color: ${bg};"><code>${html}</code></pre>`;
}

const languageMap = {
    javascript: Languages.EcmaScript,
    typescript: Languages.EcmaScript,
    json: Languages.Json,
    lua: Languages.Lua,
    rust: Languages.Rust,
    python: Languages.Python,
};

type Language = keyof typeof languageMap;

type HighlightOptions = {
    theme?: string | ColorConfig;
    links?: boolean;
    language?: Language | "auto";
    filename?: string;
};

/**
 *
 * @param text Text to highlight
 * @param options
 * ```ts
 * type HighlightOptions = {
 *    theme?: string | ColorConfig;     // Theme name (see readme.md) or theme object (see examples in readme.md)
 *    links?: boolean;                  // Whether to convert links to <a> tags
 *    language?: Language | "auto";     // Language name (see readme.md) or "auto" to detect language from filename.
 *                                      // Your LSP should tell you supported languages.
 *    filename?: string;                // Filename to detect language from
 * }
 * ```
 */
export function highlight(
    text: string,
    options: HighlightOptions = {
        theme: "atom-one-dark",
        links: true,
        language: "auto",
        filename: "",
    },
) {
    const { theme, links, language, filename } = options;
    if (!language) throw new Error("No language specified");

    const tokens =
        language === "auto"
            ? autoparse(filename ?? "", text)?.[1]
            : parse(text, languageMap[language]);

    if (!tokens) throw new Error("No matching language");
    if (!theme) throw new Error("No theme specified");

    const [coloredTokens, bg] = colorlize(
        tokens,
        typeof theme === "string" ? selectTheme(theme) : theme,
    );
    const html = simpleHtml(coloredTokens, { links });
    return `<pre style="background-color: ${bg};"><code>${html}</code></pre>`;
}

import { GithubDark } from "./github-dark";
import { AtomOneDark } from "./atom-one-dark";

export function selectTheme(theme: string) {
    switch (theme) {
        case "github-dark":
            return GithubDark;
        case "atom-one-dark":
        case "atom-dark":
            return AtomOneDark;
        default:
            return GithubDark;
    }
}

export { GithubDark, AtomOneDark };
