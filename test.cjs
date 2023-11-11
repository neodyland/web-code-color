const { autoparse, colorlize, simpleHtml, DARK } = require(".");
const { readFileSync } = require("fs");
const js = autoparse("test.cjs", "<a></a>")[1];
const [jsc, bg] = colorlize(js, DARK);
const jsm = simpleHtml(jsc, bg);

console.log(jsm);
