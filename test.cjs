const webcolor = require(".");
const { readFileSync } = require("fs");
const js = webcolor.autoparse(
    "test.cjs",
    readFileSync("./test.cjs", "utf-8"),
)[1];
const [jsc, bg] = webcolor.colorlize(js, webcolor.DARK);
const jsm = webcolor.simpleHtml(jsc, bg);

console.log(jsm);

// link support https://github.com/neodyland
