/**
 * 
 * @param {Number} input 
 */
function validation(input){
    if(typeof input !== "number") return "000";
    const st = String(input);
    if(st.length > 3) return "000";
    if(st === "NaN") return "000";

    return String(input).padStart(3,"0");
}

export function getParam(url){
    // const params = new URLSearchParams(url)
    // const code = validation(Number(params.get("code")));
    const code = validation(Number(window.__errorCode__));
    return code
}