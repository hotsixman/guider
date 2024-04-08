<script lang="ts">
    import type { FrameworkIntroduce } from "$lib/types/frameworks";
    import svelteIntroduce from "$lib/frameworks/svelte/introduce";
    import reactIntroduce from "$lib/frameworks/react/introduce";
    import { getContext } from "svelte";
    import { type Writable } from "svelte/store";
    import { Highlight, HighlightSvelte } from "svelte-highlight";
    import dark from "svelte-highlight/styles/github-dark";
    import light from "svelte-highlight/styles/github";
    import ContrastColor from "contrast-color";

    //theme
    const { value: theme }: { value: Writable<"light" | "dark"> } =
        getContext("theme");

    //frameworks
    const frameworks: Record<string, FrameworkIntroduce> = {
        svelte: svelteIntroduce,
        react: reactIntroduce,
    };
    let selectedFramework: FrameworkIntroduce | null = null;
    function selectThisFramework(framework: FrameworkIntroduce) {
        if (selectedFramework?.name === framework.name) {
            selectedFramework = null;
        } else {
            selectedFramework = framework;
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
            <img
                class="framework-logo"
                class:framework-logo-selected={framework.name ===
                    selectedFramework?.name}
                style={`background-color:${framework.bgColor};`}
                src={framework.logo}
                on:click={() => {
                    selectThisFramework(framework);
                }}
                role="presentation"
                alt=""
            />
        {/each}
    </div>
    <div class="framework-introduce">
        {#if selectedFramework}
            <div class="description">{selectedFramework.description}</div>
            <div class="link-container">
                <a
                    class="link"
                    class:link-light={$theme === "light"}
                    href={`/framework/${selectedFramework.name}`}
                >
                    <img src={selectedFramework.logo} alt="logo" /> 살펴보기
                </a>
            </div>
            {#if selectedFramework.highlight === "svelte"}
                <HighlightSvelte code={selectedFramework.exampleCode} />
            {:else}
                <Highlight
                    code={selectedFramework.exampleCode}
                    language={selectedFramework.highlight}
                />
            {/if}
        {/if}
    </div>
</div>

<style>
    .container {
        display: flex;

        margin-top: 50px;
    }

    .framework-logo {
        cursor: pointer;
        opacity: 0.5;
    }

    .framework-logo:hover {
        opacity: 0.7;
    }

    .framework-logo-selected {
        opacity: 1 !important;
    }

    .framework-introduce:not(.description) {
        font-size: 16px;
    }

    .link-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .link {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        column-gap: 10px;

        padding-left: 10px;
        padding-right: 10px;

        height: 30px;

        font-size: 16px;
        text-decoration: none;

        background-color: black;

        color:inherit;
    }

    .link-light{
        background-color: white;
    }

    .link img {
        width: 25px;
        height: 25px;
    }

    .description {
        width: 100%;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
    }

    @media only screen and (min-width: 768px) {
        .container {
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            column-gap: 10px;
        }

        .framework-selector,
        .framework-introduce {
            width: calc(50% - 5px);
            max-width: 615px;
        }

        .framework-selector {
            width: 50%;
            max-width: 620px;

            display: flex;
            flex-wrap: wrap;
            row-gap: 5px;
            column-gap: 5px;
            justify-content: center;
        }

        .framework-logo {
            width: 80px;
            height: 80px;
            padding: 5px;
            border-radius: 50vh;
        }
    }

    @media only screen and (max-width: 767px) {
        .container {
            flex-direction: column;
            align-items: center;
        }

        .framework-selector,
        .framework-introduce {
            width: 100%;
        }
    }
</style>
