// @ts-ignore-next-line
import groupBy from "object.groupby";

export async function load({locals}) {

    const docs = import.meta.glob("$lib/frameworks/svelte/docs/**/*.md", {query:"?raw", import: "default"});

    const sec = Object.keys(docs).map((url) => {
        const routes = url.split("/");
        const chapter = routes[routes.length - 2];
        const title = routes[routes.length - 1];
        const importFunction = docs[url];

        return {
            chapter,
            title,
            importFunction,
        };
    });

    const chapterTitleOrigin = [...new Set(sec.map(({ chapter }) => chapter))].sort()
    const sectionGroupedByChapter: Record<string, typeof sec> = groupBy(
        sec,
        ({ chapter }) => chapter,
    );

    const sections2 = Object.keys(sectionGroupedByChapter)
        .sort()
        .map((key) => {
            return sectionGroupedByChapter[key].sort(sectionSortCallback)
        });

    const sections = sections2.map(e => {
        return groupBy(e, ({ title }) => title.replace(/^\[.\] (.*?)\.md$/, '$1'))
    })

    locals.sections = sections

    return {
        chapterTitleOrigin,
        sections2: sections2.map(e => e.map(el => {
            return {
                title: el.title,
                chapter: el.chapter
            }
        }))
    }
}

function sectionSortCallback(a: any, b: any): number {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
}