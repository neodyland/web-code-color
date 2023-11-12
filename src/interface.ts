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
    Comment = 0,
    String = 1,
    Number = 2,
    Keyword = 3,
    Builtin = 4,
    Operator = 5,
    Identifier = 6,
    Punctuation = 7,
    Other = 8,
}

export interface Token {
    type: TokenType;
    value: string;
}
