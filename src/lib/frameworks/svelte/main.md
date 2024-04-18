# Svelte

Svelte는 Single Page App을 만들기 위한 프레임워크입니다. 기존의 다른 프레임워크(React, Vue 등)를 사용하신 분들 뿐만 아니라 이러한 프레임워크를 처음 접해보신 분들도 쉽게 배울 수 있으며, 뛰어난 개발자 경험을 제공합니다.

Svelte를 이용하면 풀스택 웹 프레임워크인 SvelteKit 또한 사용할 수 있습니다. Svelte를 배운 뒤, [SvelteKit](/framework/sveltekit)도 만나보세요!

[<h3>시작하기</h3>](/framework/svelte/0/개요)

```svelte
<script>
    let count = 0;
    
    function increase(){
        count++;
    }
</script>

<button on:click={increase}>
    Count is {count}
</button>
```