import {ElementManagement}from"../service/element-management/element-management.js";
import{checkText}from"../util/check-text.js"

export class Status{
    /**
     *   @private
     */
    #EL_SETUP = Object.freeze({
        EL_CODE:".js-status-codenumber",
        EL_TEXT:".js-status-infotext"
    });
    #ELEMENT_MANAGEMENT;
    /**
     * ステータス表示を監理する
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
     * コードの表記を入力値に変更します
     * @param {string} text 変更する入力値 
     */
    setCode(text){
        checkText(text);
        const EL = this.#ELEMENT_MANAGEMENT.getEl(this.#EL_SETUP.EL_CODE);
        EL.innerText = text;
    }
    /**
     * テキストの表記を入力値に変更します
     * @param {string} text 変更する入力値 
     */
    setText(text){
        checkText(text);
        const EL = this.#ELEMENT_MANAGEMENT.getEl(this.#EL_SETUP.EL_TEXT);
        EL.innerText = text;
    }
}