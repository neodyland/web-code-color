import { JAVSCRIPT } from "./javascript";
import { JSON } from "./json";
import { LUA } from "./lua";

export const LANG = [JAVSCRIPT, JSON, LUA];

export const Languages = {
    Javascript: JAVSCRIPT,
    Json: JSON,
    Lua: LUA,
} as const;
