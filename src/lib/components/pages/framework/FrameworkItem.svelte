<script lang="ts">
    import { goto } from "$app/navigation";
    import { getContext } from "svelte";
    import { type Writable } from "svelte/store";

    export let name: string;
    export let bannerImg: string;
    export let description: string;

    const theme = getContext("theme") as Writable<"light"|"dark">
</script>

<a class="container" href={`/framework/${name.toLowerCase()}`}>
    <div class="banner" style={`background-image: url('${bannerImg}');`}/>
    <div class={`intro ${$theme === "light"? "intro-light" : "intro-dark"}`}>
        <div class="name">
            {name}
        </div>
        <div class="description">
            {description}
        </div>
    </div>
</a>

<style>
    .container{
        width:350px;
        height:250px;

        position:relative;

        border-radius: 10px;

        cursor:pointer;

        color:inherit;
        text-decoration: none;
    }

    .banner{
        width:100%;
        height:200px;

        border-radius: 10px;

        background-size: 100% 100%;
    }

    .intro {
        width:300px;
        height:100px;

        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 5px;

        box-sizing: border-box;

        padding-bottom: 10px;

        border-radius: 10px;

        position:absolute;
        top:150px;
        left:50%;

        transform: translateX(-50%);
        transition: transform 0.3s;
    }

    .container:hover .intro{
        transform: scale(110%) translateY(-10px) translateX(calc(-50% + 13px));
    }

    .intro-light{
        background-color: white;
    }
    .intro-dark{
        background-color: #33312f;
    }

    .intro > * {
        text-align: center;
    }

    .name{
        font-weight: bold;
        font-size: 25px;
    }
</style>