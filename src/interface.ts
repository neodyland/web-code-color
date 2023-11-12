export interface Lang {
    name: string;
    ext: string;
    comments: Match[];
    strings: Match[];
    numbers: Match[];
    keywords: Match[];
    builtins: Match[];
    operators: Match[];
    identifiers: Match[];
    punctuations: Match[];
}

export type Match =
    | string
    | {
          is_regex: boolean;
          value: string;
          match_at?: number;
      };

export enum TokenType {
    Comment,
    String,
    Number,
    Keyword,
    Builtin,
    Operator,
    Identifier,
    Punctuation,
    Other,
}

export interface Token {
    type: TokenType;
    value: string;
}
