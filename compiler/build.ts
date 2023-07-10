import * as esbuild from "https://deno.land/x/esbuild@v0.17.19/mod.js";

const enum CompileMode {
    DEVELOPMENT,
    PRODUCTION
}

const userscriptBanner = `
// ==UserScript==
// @name        Password Game TAS
// @match       https://neal.fun/password-game/
// @grant       none
// @version     1.0
// @author      Mabi19
// @description 9.07.2023, 22:48:49
// ==/UserScript==

`.trimStart()

function makeESBuildOptions(mode: CompileMode) {
    return {
        entryPoints: ["./index.ts"],
        outfile: "password-game-tas.user.js",
        bundle: true,
        minify: mode == CompileMode.PRODUCTION,
        sourcemap: mode == CompileMode.DEVELOPMENT ? "inline" as const : false,
        banner: {
            js: userscriptBanner
        },
        target: [
            "es2021",
            "chrome110",
            "firefox110",
            "safari16",
        ],
        logLevel: mode == CompileMode.PRODUCTION ? "info" as const : "warning" as const,
    }
}

export async function compile(mode: CompileMode): Promise<void> {
    if (mode == CompileMode.DEVELOPMENT) {
        // use the Watch API
        const context = await esbuild.context(makeESBuildOptions(mode));
        await context.watch();

        console.log(`Watching...`);
    } else {
        // just build it
        await esbuild.build(makeESBuildOptions(mode));
        esbuild.stop();
    }
}

const mode = (Deno.args.length > 0 && Deno.args[0] == "dev") ? CompileMode.DEVELOPMENT : CompileMode.PRODUCTION;
await compile(mode);
