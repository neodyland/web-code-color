import { Lang } from "../interface";

export const JAVSCRIPT: Lang = {
    name: "JavaScript",
    ext: "(c|m)?js$",
    comments: [
        {
            is_regex: true,
            value: '/([^"]|^)([^"]*)(/.*?\n)',
            match_at: 2,
        },
        { is_regex: true, value: '/([^"]|^)([^"]*)(\\*.*?\\*/)', match_at: 2 },
    ],
    strings: ['".*?"', "'.*?'"],
    numbers: ["[0-9]+(\\.[0-9]+)?", "0x[0-9a-fA-F]+"],
    keywords: [
        {
            is_regex: true,
            value: "([^a-zA-Z0-9_]|^)(var|let|const|function|class|extends|implements|interface|abstract|private|protected|public|static|import|from|export|as|if|else|for|while|do|break|continue|return|switch|case|default|try|catch|finally|throw|new|this|super|in|of|instanceof|typeof|void|delete|true|false|null|undefined|NaN)($|[^a-zA-Z0-9_])",
            match_at: 2,
        },
    ],
    operators: [],
    identifiers: [
        { is_regex: true, value: "([a-zA-Z_][a-zA-Z0-9_]*)\\(", match_at: 1 },
    ],
    punctuations: [],
};
