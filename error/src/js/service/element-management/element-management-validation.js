
export class ElementManagementValidation{
    /**
     * "ElementManagement" のバリデーションチェック用クラスです。
     * @version 0.1.0
     */
    constructor(){  
    }

    /**
     * ネームのバリデーションチェック
     * @param {string} name 呼び出し時に使う名前
     */
    checkName(name){
        switch(true){
            case typeof name !== "string":
                throw new TypeError(`文字列のみキーとして有効です。入力値のタイプを文字列に変更してください。`)
            break;
            case name.length <= 0:
                throw new RangeError(`0文字以上の文字列を入力してください。`)
            break;
        }
    }
    /**
     * エレメントのバリデーションチェック
     * @param {HTMLElement} el 登録するエレメント
     */
    checkEl(el){
        switch(true){
            case !(el instanceof HTMLElement):
                throw new TypeError(`HTMLElementのみ有効です。`)
            break;
        }
    }
}