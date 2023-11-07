import { build } from "esbuild";
import { stat, rm } from "fs/promises";
async function exists(path) {
    try {
        await stat(path);
        return true;
    } catch {
        return false;
    }
}
if (await exists("dist")) {
    await rm("dist", { recursive: true });
}

await build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.cjs",
    format: "cjs",
    minify: true,
});

await build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.mjs",
    format: "esm",
    minify: true,
});
