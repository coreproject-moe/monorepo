<script lang="ts">
	import "../styles/index.postcss";

	import { defineCustomElements } from "@coreproject-moe/icons/loader";
	import { onMount } from "svelte";
	import icons from "@coreproject-moe/icons-generator";

	console.log(icons);
	onMount(() => {
		defineCustomElements(window);
	});
</script>

<slot />

<!-- svelte-ignore css_unused_selector -->
<style lang="scss" global>
	@font-face {
		font-family: "Kokoro";
		src: url("../fonts/Kokoro/Kokoro-SemiBoldItalic.woff2") format("woff2");
		font-weight: 600;
		font-style: italic;
		font-display: swap;
	}
	@font-face {
		font-family: "Kokoro";
		src: url("../fonts/Kokoro/Kokoro-SemiBold.woff2") format("woff2");
		font-weight: 600;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: "Kokoro";
		src: url("../fonts/Kokoro/Kokoro-BoldItalic.woff2") format("woff2");
		font-weight: bold;
		font-style: italic;
		font-display: swap;
	}
	@font-face {
		font-family: "Kokoro";
		src: url("../fonts/Kokoro/Kokoro-Italic.woff2") format("woff2");
		font-weight: normal;
		font-style: italic;
		font-display: swap;
	}
	@font-face {
		font-family: "Kokoro";
		src: url("../fonts/Kokoro/Kokoro-Regular.woff2") format("woff2");
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}
	@font-face {
		font-family: "Kokoro";
		src: url("../fonts/Kokoro/Kokoro-Bold.woff2") format("woff2");
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}
</style>
