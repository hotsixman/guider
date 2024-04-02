<script lang="ts">
    import hljs from "highlight.js";
    import { getContext } from "svelte";
    import { type Writable } from "svelte/store";

    const {value:theme} = getContext('theme') as {value:Writable<"light"|"dark">}

    export let code: string;
    export let language: string;
    export let fileName: string | undefined = undefined;
    export let width:string = "auto"
    export let height:string = "auto"
</script>

<div class="container" style={`width:${width};height:${height};`}>
    {#if fileName !== undefined}
        <div class={`file-name ${$theme === "light"? "light" : "dark"}`}>
            {fileName}
        </div>
    {/if}
    <pre><code class="hljs" class:light={$theme === "light"}>{@html hljs.highlight(code, { language }).value}</code></pre>
</div>

<style>
    .container{
        margin-top:5px;
        margin-bottom: 5px;
    }
    
    .file-name{
        display:flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 1px;
        padding-top:2px;
        padding-bottom: 4px;
        padding-left:13px;
    }

    .file-name.light{
        background-color: #f5f5f5;
        color:black;
        box-shadow: 0px 0px 2px black;
    }
    .file-name.dark{
        background-color: #0d1117;
        color:#6e90c2;
        box-shadow: 0px 0px 2px #516a8f;
    }

    pre{
        margin:0;
    }
    code{
        padding-top:0px !important;
        padding-bottom: 20px !important;
    }
    code.light{
        background-color: #f5f5f5 !important;
    }
</style>