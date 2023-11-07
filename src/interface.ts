export interface Lang {
    name: string;
    ext: string;
    comments: string[];
    strings: string[];
    numbers: string[];
    keywords: string[];
    operators: string[];
    identifiers: string[];
    punctuations: string[];
    whitespaces: string[];
}

export const enum TokenType {
    Comment,
    String,
    Number,
    Keyword,
    Operator,
    Identifier,
    Punctuation,
    Whitespace,
    Other,
}

export interface Token {
    type: TokenType;
    value: string;
}
