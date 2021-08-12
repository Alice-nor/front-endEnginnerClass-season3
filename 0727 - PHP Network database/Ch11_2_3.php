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


    require_once('myschool_open.inc');
    // 執行 SQL 查詢
    $result = mysqli_query($link, $sql);

    // 一筆筆的以表格顯示紀錄
    echo '<table border=1><tr>';
    // 顯示欄位名稱
    while( $meta = mysqli_fetch_field($result)){
        echo '<td>'.$meta -> name.'</td>';
    }
    echo '</tr>'; //取得欄位

    $total_fields = mysqli_num_fields($result);

    // 顯示每一筆紀錄
    while($row = mysqli_fetch_row($result)){
        echo '<tr>'; // 顯示每一筆紀錄的欄位值
        for($i = 0;$i <= $total_fields-1 ; $i++){
            echo '<td>'.$row[$i].'</td>';
           
        }
        echo '</tr>';
    }

    echo '</table>';
    mysqli_free_result($result); // 釋放佔用記憶體
    require_once('myschool_close.inc');

    ?>

</body>
</html>