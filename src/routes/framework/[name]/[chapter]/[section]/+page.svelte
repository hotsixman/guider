<script lang="ts">
    import { afterUpdate, onMount } from 'svelte';
    import {highlight} from '../../+page.svelte'
    
    export let data: {doc: string};

    afterUpdate(() => {
        highlight()
    })
</script>

{@html data.doc}