import{searchError}from"../../domain/domain-error.js";

export function getStatus(code){
    const obj = searchError(code)
    return obj.title;
}