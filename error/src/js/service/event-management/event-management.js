import{EventManagementValidation}from"./event-management-validation.js";

export class EventManagement{
    #MAP;
    #VALIDATION;
    /**
     * イベントを管理します。
     * @version 0.1.0
     */
    constructor(){  
        this.#MAP = new Map();
        this.#VALIDATION = new EventManagementValidation();
    }
    
    /**
     * イベントを登録します
     * @param {string} key 
     * @param {function name(params) {}} fn 
     */
    on(key,fn){
        this.#VALIDATION.checkKey(key)
        this.#VALIDATION.checkFn(fn)

        if(!this.#MAP.has(key)) this.#MAP.set(key,[]);

        const list = this.#MAP.get(key);
        list.push(fn);
    }

    /**
     * 登録されたイベントを実行します。
     * @param {string} key 
     * @param {object} object 
     */
    emit(key,object){
        this.#VALIDATION.checkKey(key);
        this.#VALIDATION.checkObj(object);

        if(!this.#MAP.has(key))throw new Error(`入力されたキーは存在しません。入力の確認をお願いします。`);
        this.#MAP.get(key).forEach(fn=>fn(object));
    }
}