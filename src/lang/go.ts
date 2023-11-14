import { Lang } from "../interface";
import {
    StartEndIdent,
    CIdents,
    CStrings,
    CNumbers,
    CComments,
} from "./common";

export const Go: Lang = {
    name: "golang",
    ext: "go|golang",
    comments: CComments,
    strings: ["`[^`]*`", ...CStrings],
    numbers: CNumbers,
    keywords: [
        {
            value: "break|default|func|interface|select|case|defer|go|map|struct|chan|else|goto|package|switch|const|fallthrough|if|range|type|continue|for|import|return|var",
            is_regex: true,
            ...StartEndIdent,
        },
    ],
    builtins: [
        {
            value: "append|cap|close|complex|copy|imag|len|make|new|panic|print|println|real|recover|delete",
            is_regex: true,
            ...StartEndIdent,
        },
    ],
    operators: [],
    types: [
        {
            is_regex: true,
            value: "bool|byte|complex64|complex128|error|float32|float64|int|int8|int16|int32|int64|rune|string|uint|uint8|uint16|uint32|uint64|uintptr",
            ...StartEndIdent,
        },
    ],
    identifiers: CIdents,
    punctuations: [],
};
