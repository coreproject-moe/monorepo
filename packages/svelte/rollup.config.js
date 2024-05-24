import terser from "terser";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "typescript";

export default {
	input: "packages/svelte/src/Icon.svelte",
	output: {
		file: "packages/svelte/dist/index.js",
		format: 'cjs',
		sourcemap: true,
	},
	plugins: [
		nodeResolve(),
		commonjs(),
		terser(),
		typescript({
			tsconfig: "packages/svelte/tsconfig.json"
		})
	],
	external: ["svelte"]
};
