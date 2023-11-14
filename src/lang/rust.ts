import { Lang } from "../interface";
import {
    CComments,
    CIdents,
    CNumbers,
    CStrings,
    StartEndIdent,
} from "./common";

export const Rust: Lang = {
    name: "Rust",
    ext: "rs$",
    comments: CComments,
    strings: CStrings,
    numbers: [...CNumbers],
    keywords: [
        {
            is_regex: true,
            value: "as|break|const|continue|crate|else|enum|extern|false|fn|for|if|impl|in|let|loop|match|mod|move|mut|pub|ref|return|self|Self|static|struct|super|trait|true|type|unsafe|use|where|while|async|await|dyn",
            ...StartEndIdent,
        },
    ],
    builtins: [
        {
            is_regex: true,
            value: "drop|Copy|Send|Sized|Sync|Drop|Fn|FnMut|FnOnce|drop|Box|ToOwned|Clone|PartialEq|PartialOrd|Eq|Ord|AsRef|AsMut|Into|From|Default|Iterator|Extend|IntoIterator|DoubleEndedIterator|ExactSizeIterator|SliceConcatExt|ToString|assert|assert_eq|bitflags|bytes|cfg|column|compile_error|concat|concat_idents|debug_assert|debug_assert_eq|env|eprint|eprintln|file|format|format_args|include|include_bytes|include_str|is_aarch64_feature_detected|is_arm_feature_detected|is_mips64_feature_detected|is_mips_feature_detected|is_powerpc64_feature_detected|is_powerpc_feature_detected|is_x86_feature_detected|line|llvm_asm|log|macro_rules|matches|module_path|option_env|panic|print|println|select|stringify|thread_local|todo|trace_macros|unimplemented|unreachable|vec|write|writeln",
            ...StartEndIdent,
        },
    ],
    operators: [],
    identifiers: CIdents,
    punctuations: [],
};
