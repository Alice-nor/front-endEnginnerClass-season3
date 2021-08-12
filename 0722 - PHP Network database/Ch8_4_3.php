<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 學會將表單的資料送至 後端程式處理 -->
    <?php
    $username = $_POST['User'];
    $password = $_POST['Pass'];
    $address = $_POST['Address'];
    $type = $_POST['Type'];
    
    print '姓名：'.$username.'<br>';
    print '密碼：'.$password.'<br>';
    print '地址：'.nl2br($address).'<br>';
    print '種類：'.$type.'<br>';

    ?>
</body>
</html>