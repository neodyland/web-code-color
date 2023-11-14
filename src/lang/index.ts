import { EcmaScript } from "./ecmascript";
import { Json } from "./json";
import { Lua } from "./lua";
import { Rust } from "./rust";
import { Python } from "./python";
import { Go } from "./go";

export const LANG = [EcmaScript, Json, Lua, Rust, Python, Go];

export const Languages = {
    EcmaScript,
    Json,
    Lua,
    Rust,
    Python,
    Go,
} as const;

export const languageMap = {
    javascript: Languages.EcmaScript,
    typescript: Languages.EcmaScript,
    json: Languages.Json,
    lua: Languages.Lua,
    rust: Languages.Rust,
    python: Languages.Python,
    go: Languages.Go,
};

export type Language = keyof typeof languageMap;
