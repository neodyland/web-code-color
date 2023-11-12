import { CComments, CIdents, CNumbers, CStrings } from "./common";
import { Lang } from "../interface";

export const EcmaScript: Lang = {
    name: "EcmaScript",
    ext: "([cm]?[jt]sx?$|typescript|es6|javascript)",
    comments: CComments,
    strings: ["`[^`]*`", ...CStrings],
    numbers: CNumbers,
    keywords: [
        {
            is_regex: true,
            value: "([^a-zA-Z0-9_]|^)(var|let|const|function|class|extends|implements|interface|abstract|private|protected|public|static|import|from|export|as|if|else|for|while|do|break|continue|return|switch|case|default|try|catch|finally|throw|new|this|super|in|of|instanceof|typeof|void|delete|true|false|null|undefined|NaN)",
            match_at: 2,
        },
    ],
    builtins: [
        {
            is_regex: true,
            value: "([^a-zA-Z0-9_]|^)(Object|Function|Boolean|Symbol|Math|Date|Number|BigInt|String|RegExp|Array|Float32Array|Float64Array|Int8Array|Int16Array|Int32Array|Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|ArrayBuffer|SharedArrayBuffer|Atomics|DataView|JSON|Promise|Generator|GeneratorFunction|AsyncFunction|Iterator|AsyncIterator|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError|Map|Set|WeakMap|WeakSet|Proxy|Reflect|Intl|WebAssembly|arguments|require|module|exports|globalThis|console|window|self|document|localStorage|sessionStorage|setTimeout|clearTimeout|setInterval|clearInterval|queueMicrotask|requestAnimationFrame|cancelAnimationFrame|alert|confirm|prompt|open|close|eval|isFinite|isNaN|parseFloat|parseInt|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|unescape|Object|Function|Boolean|Symbol|Math|Date|Number|BigInt|String|RegExp|Array|Float32Array|Float64Array|Int8Array|Int16Array|Int32Array|Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|ArrayBuffer|SharedArrayBuffer|Atomics|DataView|JSON|Promise|Generator|GeneratorFunction|AsyncFunction|Iterator|AsyncIterator|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError|Map|Set|WeakMap|WeakSet|Proxy|Reflect|Intl|WebAssembly|arguments|require|module|exports|globalThis|console|window|self|document|localStorage|sessionStorage|setTimeout|clearTimeout|setInterval|clearInterval|queueMicrotask|requestAnimationFrame|cancelAnimationFrame|alert|confirm|prompt|open|close|eval|isFinite|isNaN|parseFloat|parseInt|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|unescape)",
            match_at: 2,
        },
    ],
    operators: [],
    identifiers: CIdents,
    punctuations: [],
};
