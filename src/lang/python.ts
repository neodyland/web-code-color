import { Lang } from "../interface";
import { CIdents, CNumbers, CStrings } from "./common";

export const Python: Lang = {
    name: "Python",
    ext: "py[c]?$",
    comments: ["#.*?(?=\n|$)"],
    strings: CStrings,
    numbers: CNumbers,
    keywords: [
        {
            is_regex: true,
            value: "([^a-zA-Z0-9_]|^)(and|as|assert|break|class|continue|def|del|elif|else|expect|False|finally|for|from|global|if|import|in|is|lambda|None|nonlocal|not|or|pass|raise|return|True|try|while|with|yield)",
            match_at: 2,
        },
    ],
    builtins: [
        {
            is_regex: true,
            value: "([^a-zA-Z0-9_]|^)(__import__|abs|all|any|ascii|bin|bool|breakpoint|bytearray|bytes|callable|chr|classmethod|compile|complex|delattr|dict|dir|divmod|enumerate|eval|exec|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|memoryview|min|next|object|oct|open|ord|pow|print|property|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip)",
            match_at: 2,
        },
    ],
    operators: [":", ",", "\\[", "\\]", "\\{", "\\}"],
    identifiers: CIdents,
    punctuations: ["\\."],
};
