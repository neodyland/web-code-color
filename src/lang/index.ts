import { EcmaScript } from "./ecmascript";
import { Json } from "./json";
import { Lua } from "./lua";

export const LANG = [EcmaScript, Json, Lua];

export const Languages = {
    EcmaScript: EcmaScript,
    Json: Json,
    Lua: Lua,
} as const;
