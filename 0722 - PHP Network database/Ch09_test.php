<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 
    建立 PHP 程式檢查 students.txt
    檔案是否存在，如果不存在就建立此檔案
    -->

    <?php
    
    header('Content-Type:text/html; charset=utf-8'); // 告訴瀏覽器這是 utf-8 編碼
    $filename = 'students.txt';
    if(file_exists($filename)){
        print '檔案'.$filename.'存在<br>';
    }
    else {
        $fp = fopen($filename,"w") // 開啟檔案
            or exit('檔案 '.$filename.' 開啟錯誤<br>');

        print '建立檔案'.$filename.'成功';
        fclose($fp);
    }
   
    ?>

</body>
</html>