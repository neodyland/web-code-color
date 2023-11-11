const hljs = require("highlight.js");
const { parse, colorlize, simpleHtml, DARK, Languages } = require(".");
const code = require("fs").readFileSync("./dist/index.cjs", "utf8");

console.log("Highlight.js: ");
const now = performance.now();
let html = "";
for (let i = 0; i < 1000; i++) {
    html = hljs.highlight(code, { language: "javascript" }).value;
}
console.log(performance.now() - now);

console.log("WebCodeColor: ");
const now2 = performance.now();
let html2 = "";
for (let i = 0; i < 1000; i++) {
    const js = parse(code, Languages.Javascript)[1];
    const [jsc, bg] = colorlize(js, DARK);
    html2 = simpleHtml(jsc, bg);
}
console.log(performance.now() - now2);
