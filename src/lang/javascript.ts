import { Lang } from "../interface";

export const JAVSCRIPT: Lang = {
    name: "JavaScript",
    ext: "(c|m)?(j|t)sx?$",
    comments: [
        {
            is_regex: true,
            value: "(//[^\"'`\n]*)(\n|$)",
            match_at: 1,
        },
        { is_regex: true, value: "(/\\*[^\"'`]*\\*/)(\n|$)", match_at: 1 },
    ],
    strings: ["`[^`]*`", '"[^\n]*?"', "'[^\n]*?'"],
    numbers: ["[0-9]+(\\.[0-9]+)?", "0x[0-9a-fA-F]+"],
    keywords: [
        {
            is_regex: true,
            value: "([^a-zA-Z0-9_]|^)(var|let|const|function|class|extends|implements|interface|abstract|private|protected|public|static|import|from|export|as|if|else|for|while|do|break|continue|return|switch|case|default|try|catch|finally|throw|new|this|super|in|of|instanceof|typeof|void|delete|true|false|null|undefined|NaN)($|[^a-zA-Z0-9_])",
            match_at: 2,
        },
    ],
    builtins: [
        {
            is_regex: true,
            value: "([^a-zA-Z0-9_]|^)(Object|Function|Boolean|Symbol|Math|Date|Number|BigInt|String|RegExp|Array|Float32Array|Float64Array|Int8Array|Int16Array|Int32Array|Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|ArrayBuffer|SharedArrayBuffer|Atomics|DataView|JSON|Promise|Generator|GeneratorFunction|AsyncFunction|Iterator|AsyncIterator|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError|Map|Set|WeakMap|WeakSet|Proxy|Reflect|Intl|WebAssembly|arguments|require|module|exports|globalThis|console|window|self|document|localStorage|sessionStorage|setTimeout|clearTimeout|setInterval|clearInterval|queueMicrotask|requestAnimationFrame|cancelAnimationFrame|alert|confirm|prompt|open|close|eval|isFinite|isNaN|parseFloat|parseInt|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|unescape|Object|Function|Boolean|Symbol|Math|Date|Number|BigInt|String|RegExp|Array|Float32Array|Float64Array|Int8Array|Int16Array|Int32Array|Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|ArrayBuffer|SharedArrayBuffer|Atomics|DataView|JSON|Promise|Generator|GeneratorFunction|AsyncFunction|Iterator|AsyncIterator|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError|Map|Set|WeakMap|WeakSet|Proxy|Reflect|Intl|WebAssembly|arguments|require|module|exports|globalThis|console|window|self|document|localStorage|sessionStorage|setTimeout|clearTimeout|setInterval|clearInterval|queueMicrotask|requestAnimationFrame|cancelAnimationFrame|alert|confirm|prompt|open|close|eval|isFinite|isNaN|parseFloat|parseInt|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|unescape)($|[^a-zA-Z0-9_])",
            match_at: 2,
        },
    ],
    operators: [],
    identifiers: [
        { is_regex: true, value: "([a-zA-Z_][a-zA-Z0-9_]*)\\(", match_at: 1 },
    ],
    punctuations: [],
};
