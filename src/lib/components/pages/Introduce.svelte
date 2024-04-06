<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

    const {value: theme} = getContext('theme') as {value: Writable<"light"|"dark">}
</script>

<section>
    <h1>
        Learn Web Frameworks
    </h1>
    <span>
        다양한 웹 프레임워크를 살펴보고 배워보세요
    </span>
</section>

<style>
    section{
        display:flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        font-size:70px
    }

    span{
        font-size:25px;
    }
</style>