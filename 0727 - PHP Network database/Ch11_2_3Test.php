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
    
    echo '<table border=1><tr>';
    echo '<td> 指令執行 </td>';
    echo '<td> 指令說明 </td>';
    echo '<td> 資料型態 </td>';
    echo '</tr>';
    
    // 執行 SQL 查詢
    $result = mysqli_query($link, $sql);
    echo '<td> $result = mysqli_query($link, $sql) </td>';
    echo '<td> 建立連線 </td>';
    echo '<td> object </td>';
    echo '</tr>';

    // 取得欄位名稱
    $meta = mysqli_fetch_field($result);
    echo '<td> $meta = mysqli_fetch_field($result) </td>';
    echo '<td> 取得欄位名稱 </td>';
    echo '<td> object </td>';
    echo '</tr>';

    // 取得欄位名稱
    $total_fields = mysqli_num_fields($result);
    echo '<td> $total_fields = mysqli_num_fields($result) </td>';
    echo '<td> 取得欄位數 </td>';
    echo '<td> integer </td>';
    echo '</tr>';

    // 取得紀錄
    $row = mysqli_fetch_row($result);
    echo '<td> $row = mysqli_fetch_row($result) </td>';
    echo '<td> 取得紀錄 </td>';
    echo '<td> array </td>';
    echo '</tr>';
    echo '</table>';

    mysqli_free_result($result); // 釋放佔用記憶體
    require_once('myschool_close.inc');

    ?>

</body>
</html>