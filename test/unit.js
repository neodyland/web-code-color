import * as items from "./unit-item.js";
import { verySimple, themes } from "../dist/index.mjs";
function renderOne(name, text, theme) {
    const now = performance.now();
    const html = verySimple(name, text, theme);
    console.log(`${performance.now() - now}ms`);
    const e = document.createElement("div");
    e.innerHTML = html;
    return e;
}
function doRender(theme) {
    for (const [name, ones] of Object.entries(items)) {
        for (const one of ones) {
            document
                .querySelector("grid")
                .appendChild(renderOne(name, one, theme));
        }
    }
}

let currentThemeIndex = -1;

function render() {
    document.querySelector("grid").innerHTML = "";
    currentThemeIndex++;
    if (currentThemeIndex === themes.length) {
        currentThemeIndex = 0;
    }
    doRender(themes[currentThemeIndex].ids[0]);
}

function onload() {
    render();
    document.querySelector("button").onclick = render;
}

document.body.onload = onload;
