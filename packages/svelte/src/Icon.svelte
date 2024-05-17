<script lang="ts">
    import { SvelteComponent } from "svelte";
    import { HTMLAttributes } from "svelte/elements";

    interface Props extends HTMLAttributes<SVGElement> {
    	name: string;
    	variant: "outline" | "solid";
    };

	let { name, variant = "outline", ...rest }: Props = $props();
	let Component = $state<SvelteComponent>();
	// outline is the default variant, it has no naming convection
	let icon_name = $state(variant === "outline" ? name : `${name}-${variant}`);

	import(`../../icons/${icon_name}.svg`)
		.then((module: SvelteComponent) => {
			Component = module;
		});
</script>

{#if Component}
	<svelte:component
		{...rest}
		this={Component.default}
	/>
{/if}
