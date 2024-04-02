<script lang="ts">
    import { writable } from "svelte/store";
    import { onMount, setContext } from "svelte";
    import { browser } from "$app/environment";
    import Header from "$lib/components/layout/Header.svelte";
    import light from 'highlight.js/styles/github.min.css?inline';
    import dark from 'highlight.js/styles/github-dark.min.css?inline';

    const theme = writable<"light"|"dark">("light");
    const toggle = () =>{
        if($theme === "light"){
            $theme = "dark"
            if(browser){
                window.localStorage.theme = "dark"
            }
        }
        else{
            $theme = "light"
            if(browser){
                window.localStorage.theme = "light"
            }
        }
    }
    setContext('theme', {value:theme, toggle});

    onMount(() => {
        if(browser){
            theme.set(window.localStorage.theme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? "dark" : "light"))
            window.localStorage.theme = $theme
        }
    })
</script>

<svelte:head>
    {#if $theme === "light"}
    <style>
        body{
            background-color:white;
            color:black;
        }
    </style>
    {@html `<style>${light}</style>`}
    {:else}
    <style>
        body{
            background-color:#1a1918;
            color:white;
        }
    </style>
    {@html `<style>${dark}</style>`}
    {/if}
</svelte:head>

<Header/>
<slot/>