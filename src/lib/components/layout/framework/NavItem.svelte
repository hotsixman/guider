<script lang="ts">
    export let href:string;

    export let height = "40px";
</script>

<a class="nav-item" {href} style={`height : ${height};`}>
    <slot/>
</a>

<style>
    .nav-item {
        width: 100%;
        height:40px;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        box-sizing: border-box;

        padding-inline: 20px;

        text-decoration: none;
        color: inherit;
    }

    @media only screen and (max-width: 767px){
        .nav-item{
            width: auto;
        }
    }
</style>
