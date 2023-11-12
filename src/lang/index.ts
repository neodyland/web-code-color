import { EcmaScript } from "./ecmascript";
import { Json } from "./json";
import { Lua } from "./lua";
import { Rust } from "./rust";

export const LANG = [EcmaScript, Json, Lua, Rust];

export const Languages = {
    EcmaScript,
    Json,
    Lua,
    Rust,
} as const;
