<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php


    // 建立 MySQL 的資料庫連接
    $link = @mysqli_connect (
        'localhost',  // MySQL主機名稱 
        'pma',       // 使用者名稱 
        '',  // 密碼
        'myschool' // 預設使用的資料庫名稱
    );

    if( !$link ){
        echo 'MySQL 資料庫連接錯誤！<br>';
        exit();
    } else {
        echo 'MySQL 資料庫 myschool 連接成功！<br>';
    }
    

    mysqli_close($link); // 關閉資料庫連接
    
    ?>

</body>
</html>