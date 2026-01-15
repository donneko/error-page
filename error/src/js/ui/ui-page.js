import{checkText}from"../util/check-text.js"
export class Page{
    constructor(){

    }

    changeTitle(text){
        checkText(text)
        document.title = text;
    }

}