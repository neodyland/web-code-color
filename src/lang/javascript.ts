import { Lang } from "../interface";

export const JAVSCRIPT: Lang = {
    name: "JavaScript",
    ext: "(c|m)?js$",
    comments: ["//.*?\n", "/\\*.*?\\*/"],
    strings: ['".*?"', "'.*?'"],
    numbers: ["[0-9]+(\\.[0-9]+)?", "0x[0-9a-fA-F]+"],
    keywords: [
        "(var|let|const|if|else|for|while|do|break|continue|return|function|class|extends|implements|interface|new|this|super|import|export|from|as|in|of|instanceof|typeof|void|delete|try|catch|finally|throw|with|debugger|default|switch|case|true|false|null|undefined|NaN|Infinity)\\b",
    ],
    operators: [
        "(\\+|-|\\*|/|%|\\^|&|\\||~|<<|>>|>>>|<|>|<=|>=|==|===|!=|!==|&&|\\|\\||\\?|:|\\+=|-=|\\*=|/=|%=|\\^=|&=|\\|=|<<=|>>=|>>>=|\\+\\+|--|\\.|\\[|\\]|\\(|\\)|\\{|\\}|;|,|=|=>|\\+=|-=|\\*=|/=|%=|\\^=|&=|\\|=|<<=|>>=|>>>=)",
    ],
    identifiers: ["[a-zA-Z_][a-zA-Z0-9_]*"],
    punctuations: ["\\."],
};
