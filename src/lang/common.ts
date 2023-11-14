export const CComments = [
    {
        is_regex: true,
        value: "(//[^\"'`\n]*)(\n|$)",
        match_at: 1,
    },
    { is_regex: true, value: "(/\\*[^\"'`]*\\*/)(\n|$)", match_at: 1 },
];

export const CStrings = ['".*?"', "'.*?'"];

const StartEndNumber = {
    start: "^$|[ \\t\\(\\)\\[\\]\\{\\}\\|\\^\\&\\<\\>\\=\\+\\-\\*\\/\\%\\!\\~\\,\\;\\:\\?\\'\\\"\\`]$",
    end: "^$|^[ \\t\\(\\)\\[\\]\\{\\}\\|\\^\\&\\<\\>\\=\\+\\-\\*\\/\\%\\!\\~\\,\\;\\:\\?\\'\\\"\\`]",
};

export const CNumbers = [
    {
        is_regex: true,
        value: "[0-9]+(\\.[0-9]+)?",
        ...StartEndNumber,
    },
    { is_regex: true, value: "0x[0-9a-fA-F]+", ...StartEndNumber },
];

export const CIdents = [
    { is_regex: true, value: "[a-zA-Z_][a-zA-Z0-9_]*", end: "^$|^[^:.]" },
];

export const StartEndIdent = {
    start: "^$|[^a-zA-Z0-9_]$",
    end: "^$|^[^a-zA-Z0-9_]",
};
