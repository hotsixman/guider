import reactIntroduce from "./react/introduce"
import reactItem from "./react/item"
import svelteIntroduce from "./svelte/introduce"
import svelteItem from "./svelte/item"
import svelteMain from "./svelte/main.md?raw"
import vueIntroduce from "./vue/introduce"
import vueItem from "./vue/item"

import showdown from "showdown"

export const frameworks = ["svelte", "react", "vue"]
export const frameworkItems = [
    svelteItem,
    reactItem,
    vueItem
]
export const frameworkIntroduces = [
    svelteIntroduce,
    reactIntroduce,
    vueIntroduce
]