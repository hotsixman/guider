import type { LanguageType } from "svelte-highlight/languages";

export interface FrameworkIntroduce{
    name: string;
    logo: string;
    description: string;
    exampleCode: string;
    language: string;
    bgColor: string;
    highlight: LanguageType<string> | "svelte"
}

export interface FrameworkItem{
    name: string;
    logo: string;
    bannerImg: string;
    description: string;
}