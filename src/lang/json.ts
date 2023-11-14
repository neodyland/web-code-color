import { Lang } from "../interface";
import { CComments, CIdents, CNumbers } from "./common";

export const Json: Lang = {
    name: "JSON",
    ext: "json[5c]?$",
    comments: CComments,
    strings: ['".*?"'],
    numbers: CNumbers,
    keywords: ["true", "false", "null"],
    builtins: [],
    operators: [":", ",", "\\[", "\\]", "\\{", "\\}"],
    types: [],
    identifiers: CIdents,
    punctuations: ["\\."],
};
