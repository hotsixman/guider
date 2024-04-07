import type { LanguageType } from "svelte-highlight/languages";

export interface FrameworkIntroduce{
    name: string;
    logo: string;
    description: string;
    exampleCode: string;
    language: string;
    highlight: LanguageType<string>
}