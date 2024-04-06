<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import ThemeToggler from "./ThemeToggler.svelte";

    const {value:theme, toggle}:{value:Writable<"light"|"dark">, toggle:() => void} = getContext('theme')
</script>

<header class={$theme === "light"? "light" : "dark"}>
    <div class="left">

    </div>
    <div class="right">
        <ThemeToggler/>
    </div>
</header>

<style>
    header{
        height:60px;

        display:flex;
        flex-direction: row;
        justify-content: space-between;

        padding-inline: 10px;

        margin-bottom: 2px;
    }

    header.dark{
        background-color: #2b2a28;
        color:white;

        box-shadow: 0px 0px 2px white;
    }

    header.light{
        background-color: white;
        color:black;

        box-shadow: 0px 0px 2px black;
    }

    .left, .right{
        height:100%;
        display:flex;
        align-items: center;
    }

    .left{
        flex-direction:row;
    }

    .right{
        flex-direction: row-reverse;
    }
</style>