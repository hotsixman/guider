<script lang="ts">
    import type { FrameworkIntroduce } from "$lib/types/frameworks";
    import svelteIntroduce from "$lib/frameworks/svelte/introduce";
    import reactIntroduce from "$lib/frameworks/react/introduce";
    import { getContext } from "svelte";
    import {type Writable } from "svelte/store";
    import { Highlight } from "svelte-highlight";
    import dark from 'svelte-highlight/styles/github-dark'
    import light from 'svelte-highlight/styles/github'

    const {value:theme}:{value:Writable<"light"|"dark">} = getContext('theme')
    const frameworks:Record<string, FrameworkIntroduce> = {
        "svelte": svelteIntroduce,
        "react": reactIntroduce
    }

    let selectedFramework: keyof typeof frameworks | null = null;
    function selectThisFramework(framework:FrameworkIntroduce){
        const name = framework.name;
        if(selectedFramework === name){
            selectedFramework = null;
        }
        else{
            selectedFramework = framework.name;
        }
    }
</script>

<svelte:head>
  {#if $theme === "light"}
  {@html light}
  {:else}
  {@html dark}
  {/if}
</svelte:head>

<div class="container">
    <div class="framework-selector">
        {#each Object.values(frameworks) as framework}
            <img class="framework-logo" class:framework-logo-selected={framework.name === selectedFramework} src={framework.logo} on:click={() => {selectThisFramework(framework)}} role="presentation" alt=""/>
        {/each}
    </div>
    <div class="framework-introduce">
        {#if selectedFramework}
            <span>{frameworks[selectedFramework].description}</span>
            <Highlight code={frameworks[selectedFramework].exampleCode} language={frameworks[selectedFramework].highlight}/>
        {/if}
    </div>
</div>

<style>
    .container{
        display:flex;

        margin-top:30px;
    }

    .framework-logo{
        cursor: pointer;
        background-color: black;
        opacity: 0.5;
    }

    .framework-logo:hover{
        opacity: 0.7;
    }

    .framework-logo-selected{
        opacity: 1 !important;
    }

    @media only screen and (min-width:768px){
        .container{
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            column-gap: 10px;
        }

        .framework-selector, .framework-introduce{
            width:calc(50% - 5px);
            max-width: 615px;
        }

        .framework-selector{
            width:50%;
            max-width: 620px;

            display:flex;
            flex-wrap: wrap;
            row-gap: 5px;
            column-gap: 5px;
            justify-content: center;
        }

        .framework-logo{
            width:80px;
            height:80px;
            padding: 5px;
            border-radius: 50vh;
        }
    }

    @media only screen and (max-width:767px){
        .container{
            flex-direction: column;
            align-items: center;
        }

        .framework-selector, .framework-introduce{
            width:100%;
        }
    }
</style>