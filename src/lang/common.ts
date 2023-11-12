export const CComments = [
    {
        is_regex: true,
        value: "(//[^\"'`\n]*)(\n|$)",
        match_at: 1,
    },
    { is_regex: true, value: "(/\\*[^\"'`]*\\*/)(\n|$)", match_at: 1 },
];

export const CStrings = ['".*?"', "'.*?'"];

export const CNumbers = ["[0-9]+(\\.[0-9]+)?", "0x[0-9a-fA-F]+"];

export const CIdents = [
    { is_regex: true, value: "([a-zA-Z_][a-zA-Z0-9_]*)\\(", match_at: 1 },
];
