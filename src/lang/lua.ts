import { Lang } from "../interface";
import { StartEndIdent } from "./common";

export const Lua: Lang = {
    name: "Lua",
    ext: "lua$",
    comments: [
        {
            is_regex: true,
            value: "(--[^\"'\n]*)(\n|$)",
            match_at: 1,
        },
    ],
    strings: ['".*?"', "'.*?'"],
    numbers: ["[0-9]+(\\.[0-9]+)?", "0x[0-9a-fA-F]+"],
    keywords: [
        {
            is_regex: true,
            value: "and|break|do|else|elseif|end|false|for|function|if|in|local|nil|not|or|repeat|return|then|true|until|while",
            ...StartEndIdent,
        },
    ],
    builtins: [],
    operators: [],
    types: [],
    identifiers: [
        { is_regex: true, value: "([a-zA-Z_][a-zA-Z0-9_]*)\\(", match_at: 1 },
    ],
    punctuations: [],
};
