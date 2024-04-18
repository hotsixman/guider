<script lang="ts">
    import { getContext, setContext } from "svelte";
    import type { Writable } from "svelte/store";
    // @ts-ignore-next-line
    import groupBy from "object.groupby";
    import NavItem from "$lib/components/layout/framework/NavItem.svelte";
    import { page } from "$app/stores";

    const theme = getContext("theme") as Writable<"light" | "dark">;

    function noPath() {
        const routes = $page.url.pathname.split("/");
        routes.pop();
        routes.pop();

        return routes.join("/");
    }
</script>

<div class="main">
    <nav class={`${$theme === "light" ? "light" : "dark"}`}>
        {#each $page.data.chapterTitleOrigin as chapterTitle, index}
            {chapterTitle.replace(/\[.\] (.*?)$/, "$1")}
            {#each $page.data.sections2[index] as section, index2}
                <NavItem href={`${noPath()}/${index}/${section.title.replace(/^\[.\] (.*?)\.md$/, '$1')}`} height="25px">
                    {index}.{index2} {section.title.replace(/^\[.\] (.*?)\.md$/, '$1')}
                </NavItem>
            {/each}
        {/each}
    </nav>
    <main>
        <slot />
    </main>
</div>

<style>
    main {
        padding-inline: 10px;
    }

    @media only screen and (min-width: 768px) {
        /*pc*/
        .main {
            min-height: calc(100% - 60px);

            display: flex;
            flex-direction: row;
        }

        nav {
            width: 230px;

            display: flex;
            flex-direction: column;
        }
        nav.dark {
            border-right: 1px solid white;
        }
        nav.light {
            border-right: 1px solid black;
        }

        main {
            width: calc(100% - 230px);
        }
    }

    @media only screen and (max-width: 767px) {
        /*mobile*/
        .main {
            width: 100%;
            height: calc(100% - 60px);

            display: flex;
            flex-direction: column;
        }

        nav {
            display: none;
        }
    }
</style>
