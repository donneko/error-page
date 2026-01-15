import {ElementManagement}from"../service/element-management/element-management.js";
import {EventManagement}from"../service/event-management/event-management.js";

export class Navigation{
    /**
     *   @private
     */
    #EL_SETUP = Object.freeze({
        EL_BACKPAGE:".js-navigation-backpage",
        EL_TOPPAGE:".js-navigation-pagetop"
    });
    #ELEMENT_MANAGEMENT;
    #EVENT_MANAGEMENT;

    /**
     * ボタンイベントの管理
     */
    constructor(){
        this.#ELEMENT_MANAGEMENT = new ElementManagement();
        this.#EVENT_MANAGEMENT = new EventManagement();

        this.#initEl();
        this.#initeEvent();
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
     * イベントをセットする
     */
    #initeEvent(){
        this.#ELEMENT_MANAGEMENT.getEl(this.#EL_SETUP.EL_TOPPAGE).addEventListener("click",()=>{
            this.#EVENT_MANAGEMENT.emit(this.#EL_SETUP.EL_TOPPAGE,{});
        });
        this.#ELEMENT_MANAGEMENT.getEl(this.#EL_SETUP.EL_BACKPAGE).addEventListener("click",()=>{
            this.#EVENT_MANAGEMENT.emit(this.#EL_SETUP.EL_BACKPAGE,{});
        });
    }
    /**
     * ホームページに戻るボタンのイベントを登録する
     * @param {function name(params) {}} fn 実行する関数 
     */
    setEventTopToPage(fn){
        this.#EVENT_MANAGEMENT.on(this.#EL_SETUP.EL_TOPPAGE,fn)
    }
    /**
     * 前のページに戻るボタンのイベントを登録する
     * @param {function name(params) {}} fn 実行する関数 
     */
    setEventBackToPage(fn){
        this.#EVENT_MANAGEMENT.on(this.#EL_SETUP.EL_BACKPAGE,fn)
    }
}