import { EcmaScript } from "./ecmascript";
import { Json } from "./json";
import { Lua } from "./lua";
import { Rust } from "./rust";
import { Python } from "./python";

export const LANG = [EcmaScript, Json, Lua, Rust, Python];

export const Languages = {
    EcmaScript,
    Json,
    Lua,
    Rust,
    Python,
} as const;
