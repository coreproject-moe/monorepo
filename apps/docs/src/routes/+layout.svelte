<script lang="ts">
    import { defineCustomElements } from '@coreproject-moe/icons/loader';
    import { onMount } from 'svelte';
    import icons from '@coreproject-moe/icons-generator';

    console.log(icons);
    onMount(() => {
        defineCustomElements(window);
    });
</script>

<slot />
