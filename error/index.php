<?php
    $status = $_SERVER['REDIRECT_STATUS'] ?? '500';
?>

<!DOCTYPE html>
<html lang="ja" data-theme="">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow, noarchive">
    <base href="/error/"/>
    <title>Error</title>
    <link href="./src/css/init-page.css" rel="stylesheet" type="text/css">
    <link href="./src/css/index.css" rel="stylesheet" type="text/css">
</head>
<body>
    <main class="statusinfo">
        <section class="info">
            <div class="info-board info-scrollbar-style js-info-board">
            </div>
            <nav class="info-navigation">
                <button class="info-navigation-button js-navigation-backpage">前のページに戻る</button>
                <button class="info-navigation-button js-navigation-pagetop">トップページに戻る</button>
            </nav>
        </section>
        <section class="status js-status">
            <h1 class="status-codenumber js-status-codenumber">Error</h1>
            <h2 class="status-infotext js-status-infotext">エラーが発生しました</h2>
        </section>
    </main>
    <script>
        window.__errorCode__ = <?= json_encode((int)$status) ?>;
    </script>
    <script type="module" src="./src/js/main.js"></script>
    
</body>
</html>