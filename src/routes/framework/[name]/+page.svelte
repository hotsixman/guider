<script lang="ts" context="module">
    export function highlight() {
        const languageList = hljs.listLanguages();
        // @ts-ignore-next-line
        (document.querySelectorAll("pre > code") as HTMLElement[]).forEach((codeBlock: HTMLElement) => {
            const language = codeBlock.classList[0];
            if (languageList.includes(codeBlock.classList[0])) {
                codeBlock.innerHTML = hljs.highlight(
                    language,
                    codeBlock.innerText,
                ).value;
            } else if (language === "svelte") {
                codeBlock.innerHTML = hljs.highlight(
                    "html",
                    codeBlock.innerText,
                ).value;
            } else {
                codeBlock.innerHTML = hljs.highlightAuto(
                    codeBlock.innerText,
                ).value;
            }
            codeBlock.className = "hljs " + codeBlock.className;
        });
        return "";
    }
</script>

<script>
    import { browser } from "$app/environment";
    import hljs from "highlight.js";
    import { afterUpdate, onMount } from "svelte";

    export let data

    afterUpdate(() => {
        if (browser) {
            highlight()
        }
    })
</script>

{@html data.main}