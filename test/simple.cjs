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
const html = webcolor.simpleHtml(coloredTokens);

console.log(`
<style>
  @font-face {
    font-family: "Hack Nerd";
    src: url("https://mshaugh.github.io/nerdfont-webfonts/build/hack-nerd-font.css") format("truetype");
  }
  code {
    font-family: "Hack Nerd";
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  pre{
    overflow: auto;
    background: ${bg};
    padding: 1rem;
    border-radius: 0.5rem;
  }
</style>
<pre><code>${html}</code></pre>`);

// link support https://github.com/neodyland
