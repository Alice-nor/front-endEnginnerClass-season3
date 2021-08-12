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

    $sql = 'select * from students'; // 指定 SQL 查詢字串
    // 送出 utf-8 的 SQL 指令
    if( $result = mysqli_query($link, $sql)) {
        echo '資料表：students<br>';
        
        // 取得欄位數
        $total_fields = mysqli_num_fields($result);
        echo '欄位數：'.$total_fields.'個<br>';

        // 取得紀錄數
        $total_records = mysqli_num_rows($result);
        echo '紀錄數：'.$total_records.'筆<br>';
        echo '<table border=1>';
        echo '<tr><td>欄位名稱</td><td>資料表</td>';
        echo '<td>最大長度</td><td>資料類型</td></tr>';

        // 顯示欄位資訊
        while($meta = mysqli_fetch_field($result)){
            echo '<tr><td>'.$meta -> name.'</td>';
            echo '<td>'.$meta -> table.'</td>';
            echo '<td>'.$meta -> max_length.'</td>';
            echo '<td>'.$meta -> type.'</td></tr>';

        }
        mysqli_free_result($result); // 釋放佔用記憶體
    }

    echo '</table>';
    mysqli_close($link); // 關閉資料庫連接
    
    ?>

</body>
</html>