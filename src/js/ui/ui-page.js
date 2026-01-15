import{checkText}from"../util/check-text.js"
export class Page{
    constructor(){

    }

    ChangeTitle(text){
        checkText(text)
        document.head.title = text;
    }

}