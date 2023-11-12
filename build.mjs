import { build } from "esbuild";
import { minify } from "terser";
import { stat, rm, readFile, writeFile } from "fs/promises";
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

const cjs = await minify(
    await readFile("dist/index.cjs", { encoding: "utf-8" }),
    {
        mangle: true,
        compress: true,
        format: {
            comments: false,
        },
    },
);

const esm = await minify(
    await readFile("dist/index.mjs", { encoding: "utf-8" }),
    {
        mangle: true,
        compress: true,
        format: {
            comments: false,
        },
        module: true,
    },
);

if (cjs.code && esm.code) {
    await writeFile("dist/index.cjs", cjs.code);
    await writeFile("dist/index.mjs", esm.code);
}
