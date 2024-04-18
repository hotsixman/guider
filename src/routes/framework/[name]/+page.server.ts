import showdown from "showdown";

export async function load({params}){
    const converter = new showdown.Converter();
    let main = '';
    try{
        main = converter.makeHtml((await import(
            `../../../lib/frameworks/${params.name}/main.md?raw`
        )).default)
    }
    catch{}
    return {
        main
    }
}