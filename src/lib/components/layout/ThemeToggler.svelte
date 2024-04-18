<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import light from "../../assets/img/light.svg";
    import dark from "../../assets/img/dark.svg";

    const theme = getContext('theme') as Writable<"light"|"dark">
    const toggle = getContext('themeToggle') as () => void
</script>

<div
    class={`container ${$theme === "light" ? "container-light" : "container-dark"}`}
    role="presentation"
    on:click={toggle}
>
    <div
        class={`marker ${$theme === "light" ? "marker-light" : "marker-dark"}`}
    >
        {#if $theme === "light"}
            <img src={light} alt="theme logo"/>
        {:else}
            <img src={dark} style="filter:invert(100%);" alt="theme logo"/>
        {/if}
    </div>
</div>

<style>
    .container {
        width: 50px;
        height: 25px;

        border-radius: 50vh;
        box-sizing: border-box;

        cursor: pointer;
        user-select: none;
    }

    .container-dark {
        border: 1px solid white;
    }

    .container-light {
        border: 1px solid black;
    }

    .marker {
        width: 23px;
        height: 23px;

        border-radius: 50vh;

        transition: transform 0.2s;

        display:flex;
        justify-content: center;
        align-items: center;
    }

    .marker-light {
        background-color: #ededed;
    }

    .marker-dark {
        background-color: black;

        transform: translateX(25px);
    }

    .marker img{
        width:80%;
        height:80%;
    }
</style>
