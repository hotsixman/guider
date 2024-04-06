export default {
    svelte:/*html*/ `
<script>
    let count = 0;

    function plus(){
        count++;
    }
</script>

<button on:click={plus}>Count is {count}!</button>
`
}