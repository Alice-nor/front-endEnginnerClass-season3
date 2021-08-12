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
    echo '將紀錄指標移動到第 3 筆紀錄<br>';
    mysqli_data_seek($result, 2);
    $row = mysqli_fetch_row($result);
    echo 'sno = '.$row[0].' name = '.$row[1].'<br>';

    echo '將紀錄指標移動到第 5 筆紀錄<br>';
    mysqli_data_seek($result, 4);

    $row = mysqli_fetch_row($result);
    echo 'sno = '.$row[0].' name = '.$row[1].'<br>';

    mysqli_free_result($result); // 釋放佔用記憶體
    require_once('myschool_close.inc');

    ?>

</body>
</html>