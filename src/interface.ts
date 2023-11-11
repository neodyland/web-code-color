export interface Lang {
    name: string;
    ext: string;
    comments: Match[];
    strings: Match[];
    numbers: Match[];
    keywords: Match[];
    operators: Match[];
    identifiers: Match[];
    punctuations: Match[];
}

export type Match =
    | string
    | {
          is_regex: false;
          value: string;
      };

export enum TokenType {
    Comment,
    String,
    Number,
    Keyword,
    Operator,
    Identifier,
    Punctuation,
    Other,
}

export interface Token {
    type: TokenType;
    value: string;
}
