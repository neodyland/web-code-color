export * from "./interface";
import { LANG } from "./lang";
import { parse as rparse, detectLang } from "./parser";

export function parse(path: string, code: string) {
    const lang = detectLang(path, LANG);
    if (!lang) {
        return null;
    }
    return [lang[1], rparse(code, lang[0])] as const;
}

export * from "./color";
