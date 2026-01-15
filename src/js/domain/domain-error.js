const ERROR_MAP = {
    404:{
        title:"404 Not Found",
        message:"お探しのページは見つかりませんでした"
    },
    503:{
        title: "500 Server Error",
        message: "サーバーエラーが発生しました"
    }
}

export function searchError(code){
    return ERROR_MAP[code] ?? {
        title:"Error",
        message:"不明なエラーが発生しました"
    }
}