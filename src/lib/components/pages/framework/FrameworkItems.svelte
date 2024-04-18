<script lang="ts">
    import FrameworkItem from "$lib/components/pages/framework/FrameworkItem.svelte";
    import { frameworkItems } from "$lib/frameworks/frameworks";
</script>

<div class="item-container">
    {#each frameworkItems as framework}
        <FrameworkItem
            name={framework.name}
            description={framework.description}
            bannerImg={framework.bannerImg}
        />
    {/each}
</div>

<style>
    .item-container{
        row-gap: 10px;
    }

    @media only screen and (max-width: 767px) {
        .item-container{
            display:flex;
            flex-direction: column;
            align-items: center;
        }
    }

    @media only screen and (min-width: 768px) {
        .item-container {
            display: grid;
            justify-content: center;

            grid-template-columns: repeat(2, 350px);
            column-gap: 10px;
        }
    }

    @media only screen and (min-width: 1050px) {
        .item-container {
            display: grid;
            justify-content: center;

            grid-template-columns: repeat(3, 350px);
            column-gap: 10px;
        }
    }
</style>
