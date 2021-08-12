<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    


    <!-- 學習使用 header()  轉址 -->
    <?php


    $value = rand(1,3); // 取得亂數值

    // 轉址到其他網頁或 url 網址

    switch($value) {
        case 1:
            header('Location: http://www.yahoo.com.tw');
            break;
        case 2:
            header('Location: http://www.hinet.net');
            break;
        case 3:
            header('Location: http://www.pchome.com.tw');
            break;
    }

    exit();
    echo '使用 header() 函數轉址到其他網頁或 php 程式<br>'





    ?>




</body>
</html>