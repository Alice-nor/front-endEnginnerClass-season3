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


    require_once('library_open.inc');
    // 執行 SQL 查詢
    $result = mysqli_query($link, $sql);

    echo 'NUM 類型：<br>';
    echo '<table border=1>';

    while($rows = mysqli_fetch_array($result)){
        echo '<tr><td>'.$rows[0].'</td>';
        echo '<td>'.$rows[1].'</td>';
        echo '<td>'.$rows[2].'</td>';
        echo '<td>'.$rows[3].'</td></tr>';
    }

    echo '</table>';
    mysqli_free_result($result); // 釋放佔用記憶體

    // 再次執行 SQL 查詢
    $result = mysqli_query($link, $sql);
    echo 'ASSOC 類型：<br>';
    echo '<table border=1>';

    while($rows = mysqli_fetch_array($result)){
        echo '<tr><td>'.$rows['bookid'].'</td>';
        echo '<td>'.$rows['booktitle'].'</td>';
        echo '<td>'.$rows['bookprice'].'</td>';
        echo '<td>'.$rows['bookauthor'].'</td></tr>';
    }

    echo '</table>';
    mysqli_free_result($result); // 釋放佔用記憶體
    require_once('myschool_close.inc');

    ?>

</body>
</html>