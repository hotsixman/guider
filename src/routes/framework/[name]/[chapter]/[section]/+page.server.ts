import showdown from 'showdown'

export async function load({params, locals, parent}){
    await parent()
    let doc = '';
    try{
        doc = await locals.sections[params.chapter][params.section][0]["importFunction"]()
    } catch {
        doc = '# 404'
    }

    const converter = new showdown.Converter();

    return {
        doc: converter.makeHtml(doc)
    }
}