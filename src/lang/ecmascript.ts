import { Lang } from "../interface";
import {
    CComments,
    CIdents,
    CNumbers,
    CStrings,
    StartEndIdent,
} from "./common";

export const EcmaScript: Lang = {
    name: "EcmaScript",
    ext: "([cm]?[jt]sx?$|typescript|es6|javascript)",
    comments: CComments,
    strings: ["`[^`]*`", ...CStrings],
    numbers: CNumbers,
    keywords: [
        {
            is_regex: true,
            value: "var|let|const|function|class|extends|implements|interface|abstract|private|protected|public|static|import|from|export|as|if|else|for|while|do|break|continue|return|switch|case|default|try|catch|finally|throw|new|this|super|in|of|instanceof|typeof|void|delete|true|false|null|undefined|NaN",
            ...StartEndIdent,
        },
    ],
    builtins: [
        {
            is_regex: true,
            value: "Object|Function|Boolean|Symbol|Math|Date|Number|BigInt|String|RegExp|Array|Float32Array|Float64Array|Int8Array|Int16Array|Int32Array|Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|ArrayBuffer|SharedArrayBuffer|Atomics|DataView|JSON|Promise|Generator|GeneratorFunction|AsyncFunction|Iterator|AsyncIterator|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError|Map|Set|WeakMap|WeakSet|Proxy|Reflect|Intl|WebAssembly|arguments|require|module|exports|globalThis|console|window|self|document|localStorage|sessionStorage|setTimeout|clearTimeout|setInterval|clearInterval|queueMicrotask|requestAnimationFrame|cancelAnimationFrame|alert|confirm|prompt|open|close|eval|isFinite|isNaN|parseFloat|parseInt|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|unescape|Object|Function|Boolean|Symbol|Math|Date|Number|BigInt|String|RegExp|Array|Float32Array|Float64Array|Int8Array|Int16Array|Int32Array|Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|ArrayBuffer|SharedArrayBuffer|Atomics|DataView|JSON|Promise|Generator|GeneratorFunction|AsyncFunction|Iterator|AsyncIterator|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError|Map|Set|WeakMap|WeakSet|Proxy|Reflect|Intl|WebAssembly|arguments|require|module|exports|globalThis|console|window|self|document|localStorage|sessionStorage|setTimeout|clearTimeout|setInterval|clearInterval|queueMicrotask|requestAnimationFrame|cancelAnimationFrame|alert|confirm|prompt|open|close|eval|isFinite|isNaN|parseFloat|parseInt|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|unescape",
            ...StartEndIdent,
        },
    ],
    operators: [],
    identifiers: CIdents,
    punctuations: [],
};
