export * from "./interface";
import { LANG } from "./lang";
import { parse, detectLang } from "./parser";

export function autoparse(path: string, code: string) {
    const lang = detectLang(path, LANG);
    if (!lang) {
        return null;
    }
    return [lang[1], parse(code, lang[0])] as const;
}

export { parse };

export * from "./color";
export { Languages } from "./lang";
