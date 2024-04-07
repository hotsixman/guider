import svelteLogo from '$lib/assets/img/frameworks/svelte.svg'
import type { FrameworkIntroduce } from '$lib/types/frameworks'
import svelteLoader from 'highlightjs-svelte'

let svelte:any;
const f = {
    registerLanguage(a:string, b:any){
        svelte = {
            name:'svelte',
            register:b
        };
    }
}

svelteLoader(f)

const svelteIntroduce:FrameworkIntroduce = {
    name:"svelte",
    logo: svelteLogo,
    description: "쉬운 문법으로 컴포넌트 기반 SPA를 제작할 수 있습니다.",
    exampleCode: /*html*/`
    <script>
        let count = 0;
        function increase(){count++;}
    </script>
    <button on:click={increase}>
        Count is {count}
    </button>
    `,
    language: "javascript",
    highlight: svelte
}

Object.freeze(svelteIntroduce)

export default svelteIntroduce