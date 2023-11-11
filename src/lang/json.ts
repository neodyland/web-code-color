import { Lang } from "../interface";

export const JSON: Lang = {
    name: "JSON",
    ext: "json(5|c)?$",
    comments: ["//.*?\n", "/\\*.*?\\*/"],
    strings: ['".*?"'],
    numbers: ["[0-9]+(\\.[0-9]+)?", "0x[0-9a-fA-F]+"],
    keywords: ["true", "false", "null"],
    operators: [":", ",", "\\[", "\\]", "\\{", "\\}"],
    identifiers: ["[a-zA-Z]+"],
    punctuations: ["\\."],
};
