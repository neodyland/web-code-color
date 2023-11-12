import { Lang } from "../interface";

export const JSON: Lang = {
    name: "JSON",
    ext: "json(5|c)?$",
    comments: [
        {
            is_regex: true,
            value: "(//[^\"'\n]*)(\n|$)",
            match_at: 1,
        },
        { is_regex: true, value: "(/\\*[^\"'\n]*\\*/)(\n|$)", match_at: 1 },
    ],
    strings: ['".*?"'],
    numbers: ["[0-9]+(\\.[0-9]+)?", "0x[0-9a-fA-F]+"],
    keywords: ["true", "false", "null"],
    builtins: [],
    operators: [":", ",", "\\[", "\\]", "\\{", "\\}"],
    identifiers: ["[a-zA-Z]+"],
    punctuations: ["\\."],
};
