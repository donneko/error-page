export function getParam(url){
    const params = new URLSearchParams(url)
    return params.get("code")
}