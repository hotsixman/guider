<script lang="ts">
    import hljs from "highlight.js";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

    const {value:theme} = getContext('theme') as {value:Writable<"light"|"dark">}

    export let code:string|undefined = undefined;
    export let language:string;


</script>

{#if code === undefined}
<pre><code class="hljs"><slot/></code></pre>
{:else}
    <pre><code class="hljs">{@html hljs.highlight(code, {language}).value}</code></pre>
{/if}