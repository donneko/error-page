import {ElementManagementValidation}from"./element-management-validation.js";
export class ElementManagement{
    #MAP;
    #VALIDATION;
    /**
     * エレメントを監理します。これはリソース監理や予期せぬメモリリークの改善に効果を表します。
     * @version 0.1.0
     */
    constructor(){  
        this.#MAP = new Map();
        this.#VALIDATION = new ElementManagementValidation();
    }

    /**
     * エレメントを監理する。(登録用)
     * @param {string} name 呼び出し時に使う名前
     * @param {HTMLElement} el 登録するエレメント
     */
    setEl(name,el){
        this.#VALIDATION.checkEl(el);
        this.#VALIDATION.checkName(name);

        if(this.#MAP.has(name))throw new Error(`入力されたキーはすでに使用されています。別のキー名にしてください。`);

        this.#MAP.set(name,el);
    }
    /**
     * エレメントを監理する。(呼び出し用)
     * @param {string} name 呼び出し時に使う名前
     * @return {HTMLElement} 登録されたエレメント
     */
    getEl(name){
        this.#VALIDATION.checkName(name);

        if(!this.#MAP.has(name))throw new Error(`入力されたキーは存在しません。入力の確認をお願いします。`);
        return this.#MAP.get(name);
    }
}