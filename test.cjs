const { parse } = require(".");
const { readFileSync } = require("fs");
const json = parse("package.json", readFileSync("package.json", "utf-8"));
const js = parse("test.cjs", readFileSync("test.cjs", "utf-8"));
console.log(js);
