import stencil from "unplugin-stencil/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		browser: {
			enabled: true,
			name: "firefox"
		}
	},
	plugins: [stencil()]
});
