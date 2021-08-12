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

    // 了解 $_SERVER 提供的資訊

    $ip = $_SERVER['REMOTE_ADDR']; // 取得指定伺服器變數
    $path = $_SERVER['SCRIPT_NAME'];
    $server = $_SERVER['SERVER_SOFTWARE'];

    print 'IP位址：'.$ip.'<br>';
    print '路徑：'.$path.'<br>';
    print 'Web伺服器：'.$server.'<br>';

    ?>
    
    <table border="1">
        <tr>
        <td>名稱</td>
        <td>值</td>
        </tr>

    <?php

    // 顯示所有 $_SERVER 變數

    foreach($_SERVER as $key => $value){
        echo 
        '<tr>
            <td>'.$key.'</td>';

        echo 
            '<td>'.$value.'</td>
        </tr>';
    }

    ?>

    </table>

</body>
</html>