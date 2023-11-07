const { parse, colorlize, simpleHtml, DARK } = require(".");
const { readFileSync } = require("fs");
const js = parse("test.cjs", readFileSync("test.cjs", "utf-8"))[1];
const [jsc, bg] = colorlize(js, DARK);
const jsm = simpleHtml(jsc, bg);

console.log(jsm);
