<script lang="ts">
    import { writable } from "svelte/store";
    import { onMount, setContext } from "svelte";
    import { browser } from "$app/environment";
    import Header from "$lib/components/layout/Header.svelte";
    import dark from "svelte-highlight/styles/github-dark";
    import light from "svelte-highlight/styles/github";
    import "./app.css";

    //theme
    const theme = writable<"light" | "dark">();
    let themeLoadResolve: () => void;
    const themeLoad = new Promise<void>((res) => {
        themeLoadResolve = res;
    });
    const toggle = () => {
        if ($theme === "light") {
            $theme = "dark";
            if (browser) {
                window.localStorage.theme = "dark";
            }
        } else {
            $theme = "light";
            if (browser) {
                window.localStorage.theme = "light";
            }
        }
    };
    setContext("theme", theme);
    setContext("themeToggle", toggle);
    onMount(() => {
        if (browser) {
            theme.set(
                window.localStorage.theme ||
                    (window.matchMedia &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? "dark"
                        : "light"),
            );
            window.localStorage.theme = $theme;
            themeLoadResolve();
        }
    });
</script>

<svelte:head>
    {#if $theme === "light"}
        {@html light}
    {:else}
        {@html dark}
    {/if}
    <style>
        pre > code {
            font-size: 16px;
        }

        :not(pre) > code{
            font-size: 14px;

            height:22px;
            display:inline-flex;
            align-items: center;

            padding-inline: 3px;

            border-radius:5px;
        }
        
    </style>
    {#await themeLoad then}
        {#if $theme === "light"}
            <style>
                body {
                    background-color: white;
                    color: black;
                }
                code {
                    background-color: #e9f0f0 !important;
                }
            </style>
        {:else}
            <style>
                body {
                    background-color: #1a1918;
                    color: white;
                }

                :not(pre) > code {
                    background-color: #3b3937;
                }
            </style>
        {/if}
    {/await}
</svelte:head>

<Header />
{#await themeLoad then}
    <slot />
{/await}
