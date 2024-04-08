import vueLogo from '$lib/assets/img/frameworks/vue.svg'
import type { FrameworkIntroduce } from '$lib/types/frameworks'
import * as vueRegister from 'highlightjs-vue'

const vue = {
    name:"vue",
    register: vueRegister.definer
}

const vueIntroduce:FrameworkIntroduce = {
    name:"vue",
    logo: vueLogo,
    description: "컴포넌트 기반의 프론트엔트 프레임워크입니다.",
    exampleCode: /*html*/`
    <template>
        <button @click="increase">
            Count is {{count}}
        </button>
    </template>

    <script>
        export default {
            data(){
                return {
                    count: 0
                }
            },
            methods: {
                increase(){
                    this.count++;
                }
            }
        }
    </script>
    `,
    language: "javascript",
    highlight: vue,
    bgColor: "#2e2e2e"
}

Object.freeze(vueIntroduce)

export default vueIntroduce