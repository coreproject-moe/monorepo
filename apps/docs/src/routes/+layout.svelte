<script lang="ts">
    import { defineCustomElements } from '@coreproject-moe/icons/loader';
    import { onMount } from 'svelte';

    onMount(() => {
        defineCustomElements(window);
    });
</script>

<slot />
