<script lang="ts">
    import { SvelteComponent } from "svelte";
    import { HTMLAttributes } from "svelte/elements";

    interface Props extends HTMLAttributes<SVGElement> {
    	name: string;
    };

	let { name, ...rest }: Props = $props();
	let Component = $state<SvelteComponent>();

	import(`../../icons/${name}.svg`).then((module: SvelteComponent) => {
		Component = module;
	});
</script>

{#if Component}
	<svelte:component
		{...rest}
		this={Component.default}
	/>
{/if}
