<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";

    const {value: theme} = getContext('theme') as {value: Writable<"light"|"dark">}
</script>

<section>
    <h1>
        Learn Web Libraries and Frameworks
    </h1>
    <span>
        다양한 웹 라이브러리와 프레임워크를 살펴보고 배워보세요
    </span>
</section>

<style>
    section{
        display:flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        font-size:70px;
        text-wrap: balance;
        text-align: center;
    }

    span{
        font-size:25px;
        text-wrap: balance;
        word-break: keep-all;
        text-align: center;
    }
</style>