export const ERROR_MAP = Object.freeze({
    400: {
        title: "400 Bad Request",
        message: "リクエストの内容に問題があるため、ページを表示できませんでした。",
    },
    401: {
        title: "401 Unauthorized",
        message: "このページを表示するには認証が必要です。",
    },
    402: {
        title: "402 Payment Required",
        message: "このページは現在利用できません。",
    },
    403: {
        title: "403 Forbidden",
        message: "このページへのアクセスは許可されていません。",
    },
    404: {
        title: "404 Not Found",
        message: "お探しのページは見つかりませんでした。",
    },
    405: {
        title: "405 Method Not Allowed",
        message: "この操作は現在利用できません。",
    },
    406: {
        title: "406 Not Acceptable",
        message: "お使いの環境では、このページを表示できませんでした。",
    },
    407: {
        title: "407 Proxy Authentication Required",
        message: "ネットワークの認証が必要なため、ページを表示できませんでした。",
    },
    408: {
        title: "408 Request Timeout",
        message: "通信がタイムアウトしました。時間をおいて再度お試しください。",
    },
    409: {
        title: "409 Conflict",
        message: "現在の状態では、この操作を完了できませんでした。",
    },
    410: {
        title: "410 Gone",
        message: "このページはすでに削除されています。",
    },
    411: {
        title: "411 Length Required",
        message: "リクエストを正しく処理できませんでした。",
    },
    412: {
        title: "412 Precondition Failed",
        message: "条件を満たしていないため、ページを表示できませんでした。",
    },
    413: {
        title: "413 Content Too Large",
        message: "送信されたデータが大きすぎます。",
    },
    414: {
        title: "414 URI Too Long",
        message: "リクエストの内容が長すぎるため、処理できませんでした。",
    },
    415: {
        title: "415 Unsupported Media Type",
        message: "この形式のデータには対応していません。",
    },
    416: {
        title: "416 Range Not Satisfiable",
        message: "指定された範囲のデータを取得できませんでした。",
    },
    417: {
        title: "417 Expectation Failed",
        message: "リクエストを処理できませんでした。",
    },
    418: {
        title: "418 I'm a teapot",
        message: "このサーバーはティーポットであるため、処理できませんでした。",
    },
    421: {
        title: "421 Misdirected Request",
        message: "リクエスト先が正しくありません。",
    },
    422: {
        title: "422 Unprocessable Content",
        message: "内容に問題があるため、処理できませんでした。",
    },
    423: {
        title: "423 Locked",
        message: "このページは現在利用できません。",
    },
    424: {
        title: "424 Failed Dependency",
        message: "関連する処理に失敗したため、表示できませんでした。",
    },
    425: {
        title: "425 Too Early",
        message: "この操作はまだ実行できません。",
    },
    426: {
        title: "426 Upgrade Required",
        message: "現在の接続方法ではページを表示できません。",
    },
    428: {
        title: "428 Precondition Required",
        message: "必要な条件が不足しています。",
    },
    429: {
        title: "429 Too Many Requests",
        message: "アクセスが集中しています。しばらくしてから再度お試しください。",
    },
    431: {
        title: "431 Request Header Fields Too Large",
        message: "リクエスト情報が大きすぎます。",
    },
    451: {
        title: "451 Unavailable For Legal Reasons",
        message: "このページは法的な理由により表示できません。",
    },
    500: {
        title: "500 Internal Server Error",
        message: "サーバーで問題が発生しました。",
    },
    501: {
        title: "501 Not Implemented",
        message: "この機能は現在利用できません。",
    },
    502: {
        title: "502 Bad Gateway",
        message: "サーバーとの通信に問題が発生しました。",
    },
    503: {
        title: "503 Service Unavailable",
        message: "現在サービスを利用できません。しばらくしてから再度お試しください。",
    },
    504: {
        title: "504 Gateway Timeout",
        message: "サーバーからの応答がありませんでした。",
    },
    505: {
        title: "505 HTTP Version Not Supported",
        message: "この通信方式には対応していません。",
    },
    506: {
        title: "506 Variant Also Negotiates",
        message: "サーバー設定の問題により表示できません。",
    },
    507: {
        title: "507 Insufficient Storage",
        message: "サーバーの容量不足により処理できませんでした。",
    },
    508: {
        title: "508 Loop Detected",
        message: "処理中に問題が発生しました。",
    },
    510: {
        title: "510 Not Extended",
        message: "このリクエストは処理できませんでした。",
    },
    511: {
        title: "511 Network Authentication Required",
        message: "ネットワーク認証が必要です。",
    },
});

export function searchError(code) {
    const key = String(code ?? "");
    return (
        ERROR_MAP[key] ?? {
        title: "Error",
        message: "ページを表示できませんでした。",
        }
    );
}
