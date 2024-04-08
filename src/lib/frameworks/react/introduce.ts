import reactLogo from '$lib/assets/img/frameworks/react.svg'
import type { FrameworkIntroduce } from '$lib/types/frameworks'
import jsx from 'svelte-highlight/languages/javascript'

const reactIntroduce:FrameworkIntroduce = {
    name:"react",
    logo: reactLogo,
    description: "전세계적으로 많이 사용하는 컴포넌트 기반 SPA 프레임워크입니다.",
    exampleCode: /*jsx*/`
    import React, { useState } from "react";

    export default function App(){
        const [count, setCount] = useState(0);

        const increase = () => {
            setCount(count => count + 1);
        }

        return(
            <button onClick={increase}>
                Count is {count}
            </button>
        )
    }
    `,
    language: "javascript",
    highlight: jsx,
    bgColor: "black"
}

Object.freeze(reactIntroduce)

export default reactIntroduce