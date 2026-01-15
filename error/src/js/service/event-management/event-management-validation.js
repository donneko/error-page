
export class EventManagementValidation{
    /**
     * "EventManagement" のバリデーションチェック用クラスです。
     * @version 0.1.0
     */
    constructor(){  
    }

    /**
     * キーのバリデーションチェック
     * @param {string} key 呼び出し時に使うキー
     */
    checkKey(key){
        switch(true){
            case typeof key !== "string":
                throw new TypeError(`文字列のみキーとして有効です。入力値のタイプを文字列に変更してください。`)
            break;
            case key.length <= 0:
                throw new RangeError(`0文字以上の文字列を入力してください。`)
            break;
        }
    }
    /**
     * 関数のバリデーションチェック
     * @param {HTMLElement} fn 登録する関数
     */
    checkFn(fn){
        switch(true){
            case typeof fn !== "function":
                throw new TypeError(`関数のみ有効です`)
            break;
        }
    }
    /**
     * オブジェクトのバリデーションチェック
     * @param {HTMLElement} obj 引数で使うオブジェクト
     */
    checkObj(obj){
        switch(true){
            case typeof obj !== "object":
                throw new TypeError(`オブジェクトのみ有効です`)
            break;
        }
    }
}