const webcolor = require(".");
//const { readFileSync } = require("fs");

const text = `
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
        vim.fn.system({
                "git",
                "clone",
                "--filter=blob:none",
                "https://github.com/folke/lazy.nvim.git",
                "--branch=stable", -- latest stable release
                lazypath,
        })
end
vim.opt.rtp:prepend(lazypath)

local opts = {
        performance = {
                cache = {
                        enabled = true,
                },
        },
}
vim.g.mapleader = " "
require("lazy").setup("ggfn/plugins", opts)
`;

const tokens = webcolor.autoparse("test.lua", text)[1];
// from https://github.com/highlightjs/highlight.js/blob/main/src/styles/github-dark.css
// compare to https://highlightjs.org/demo#lang=javascript&v=1&theme=github-dark
const theme = {
    comments: {
        value: "#8b949e",
    },
    strings: {
        value: "#a5d6ff",
    },
    numbers: {
        value: "#79c0ff",
    },
    keywords: {
        value: "#ff7b72",
    },
    operators: {
        value: "#c9d1d9",
    },
    identifiers: {
        value: "#d2a8ff",
    },
    punctuations: {
        value: "#c9d1d9",
    },
    others: {
        value: "#c9d1d9",
    },
    bgColor: "#0d1117",
};
const [coloredTokens, bg] = webcolor.colorlize(tokens, theme);
const html = webcolor.simpleHtml(coloredTokens, bg);

console.log(html);

// link support https://github.com/neodyland
