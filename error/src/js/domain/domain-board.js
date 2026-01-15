import{getDate}from"../logic/board-logic/get-date.js";
import{getUrl}from"../logic/board-logic/get-url.js";
import{getLang}from"../logic/board-logic/get-lang.js";
import{getOnline}from"../logic/board-logic/get-online.js";
import{getPlatform}from"../logic/board-logic/get-platform.js";
import{getReferrer}from"../logic/board-logic/get-referrer.js";
import{getStatus}from"../logic/board-logic/get-status.js";



export function boardData(code){
    const board = [
        {title:"code",text: String(code)},
        {title:"status",text: String(getStatus(code))},
        {title:"referrer",text: String(getReferrer())},
        {title:"url",text: String(getUrl())},
        {title:"date",text: String(getDate())},
        {title:"lang",text: String(getLang())},
        {title:"platform",text: String(getPlatform())},
        {title:"online",text: String(getOnline())},
    ]
    return board;
}