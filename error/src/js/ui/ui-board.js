import {ElementManagement}from"../service/element-management/element-management.js";
import{checkText}from"../util/check-text.js"

export class Board{
    /**
     *   @private
     */
    #EL_SETUP = Object.freeze({
        EL_BOARD:".js-info-board",
    });
    #ELEMENT_MANAGEMENT;

    /**
     * ボタンイベントの管理
     */
    constructor(){
        this.#ELEMENT_MANAGEMENT = new ElementManagement();

        this.#initEl();
    }
    /**
     * @private
     */
    #initEl(){
        const Els = Object.values(this.#EL_SETUP);
        Els.forEach((value)=>{
            this.#ELEMENT_MANAGEMENT.setEl(value,document.querySelector(value));
        });
    }
    /**
     * 
     * @param {*} param0 
     */
    addBoard({title,text} = {}){
        checkText(title);
        checkText(text);

        const EL = this.#addBoardHtmlCreate({title,text});
        this.#ELEMENT_MANAGEMENT.getEl(this.#EL_SETUP.EL_BOARD).appendChild(EL);
    }

    #addBoardHtmlCreate({title,text} = {}){
        const html = `
                    <h3 class="info-board-title info-scrollbar-style">${title}</h3>
                    <hr class="info-board-border">
                    <p class="info-board-text info-scrollbar-style">${text}</p>
                    `;

        const EL = document.createElement("div");
        EL.classList.add("info-board-box");
        EL.innerHTML = html;
        return EL;
    }
}