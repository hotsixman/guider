<script lang="ts">
    import { goto } from "$app/navigation";

    export let href:string;
</script>

<div class="container" role="presentation" on:click={() => goto(href)}>
    <slot/>
</div>

<style>
    .container{
        height:100%;

        display:flex;
        justify-content: center;
        align-items: center;

        font-weight: bold;

        cursor: pointer;
    }
</style>