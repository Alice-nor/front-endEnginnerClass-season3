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
    $link = mysqli_connect (
        'localhost',  // MySQL主機名稱 
        'pma',       // 使用者名稱 
        '',  // 密碼
        'myschool' // 預設使用的資料庫名稱
    ) or die('無法開啟 MySQL 資料庫連接！<br>');

    echo '資料庫 myschool 開啟成功<br>';
    $sql = 'select * from students'; // 指定 SQL 查詢字串
    echo 'SQL 查詢字串：<br><b>'.$sql.'</b><br><hr>';

    // 送出 utf-8 的 SQL 指令
    if( $result = mysqli_query($link, $sql)) {
        echo '<b>學生資料：</b><br>'; // 顯示查詢結果
        while( $row = mysqli_fetch_assoc($result)){
            echo $row['sno'].' - '.$row['name'].'<br>';
        }
        mysqli_free_result($result); // 釋放佔用記憶體
    }

    mysqli_close($link); // 關閉資料庫連接
    
    ?>

</body>
</html>