export function load({params , url}){
    return {
        params : new URL(url).searchParams
    }
}