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
    
    $id =$_GET['Id']; // 取得 url 參數
    $name = $_GET['Name'];

    // 顯示參數值
    echo '學號：'.$id.'<br>姓名：'.$name.'<br>';
    
    ?>
</body>
</html>