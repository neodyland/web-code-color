const webcolor = require(".");
const { readFileSync } = require("fs");

let text = `
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
text = readFileSync("test.cjs", "utf-8");

const tokens = webcolor.autoparse("test.cjs", text)[1];
/*
 * GithubDark Theme
 */
const [coloredTokens, bg] = webcolor.colorlize(tokens, webcolor.AtomOneDark);
const html = webcolor.simpleHtml(coloredTokens, bg);

console.log(html);

// link support https://github.com/neodyland
