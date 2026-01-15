    /**
     * 入力のバリデーションチェック
     * @param {string} text 呼び出し時に使う名前
     */
export function checkText(text){
        switch(true){
            case typeof text !== "string":
                throw new TypeError(`文字列のみキーとして有効です。入力値のタイプを文字列に変更してください。`)
            break;
            case text.length <= 0:
                throw new RangeError(`0文字以上の文字列を入力してください。`)
            break;
        }
    }