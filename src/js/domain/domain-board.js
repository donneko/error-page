import{getDate}from"../logic/boaed-logic/get-date.js";
import{getUrl}from"../logic/boaed-logic/get-url.js";
import{getLang}from"../logic/boaed-logic/get-lang.js";



export function boardData(code){
    const board = [
        {
            title:"code",
            text:`${code}`,
        },
        {
            title:"url",
            text:`${getUrl()}`,
        },
        {
            title:"date",
            text:`${getDate()}`,
        },
        {
            title:"lang",
            text:`${getLang()}`,
        },
    ]
    return board;
}