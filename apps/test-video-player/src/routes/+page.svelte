<script lang="ts">
    import { onMount } from 'svelte';
    import { defineCustomElements } from '@coreproject-moe/video-player/loader';

    onMount(() => {
        defineCustomElements(window);
    });
</script>

Hey there!
<core-video-player
    magnet="magnet:?xt=urn:btih:5f8c308aecfa9c61999c6c45e220e3d9cd654593&dn=2025-01-05_11-05-18.mp4&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337"
></core-video-player>
