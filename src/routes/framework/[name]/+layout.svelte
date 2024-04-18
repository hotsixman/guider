<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import { frameworks } from "$lib/frameworks/frameworks";
    import NavItem from '$lib/components/layout/framework/NavItem.svelte'

    const theme = getContext("theme") as Writable<"light"|"dark">
</script>

<div class="main">
    <nav class={`${$theme === "light"? "light" : "dark" }`}>
        {#each frameworks as framework}
            <NavItem href={`/framework/${framework}`}>
                {framework}
            </NavItem>
        {/each}
    </nav>
    <main>
        <slot />
    </main>
</div>

<style>
    main{
        padding-inline: 10px;
    }

    @media only screen and (min-width: 768px) {/*pc*/
        .main {
            min-height: calc( 100% - 60px );

            display: flex;
            flex-direction: row;
        }

        nav {
            width: 230px;

            display:flex;
            flex-direction: column;
        }
        nav.dark{
            border-right: 1px solid white;
        }
        nav.light{
            border-right: 1px solid black;
        }

        main{
            width: calc(100% - 230px);
        }
    }

    @media only screen and (max-width: 767px){/*mobile*/
        .main{
            width:100%;
            height: calc(100% - 60px);

            display:flex;
            flex-direction: column;
        }

        nav{
            display:flex;
            flex-direction: row;
            justify-content: flex-start;
        }
    }
</style>
