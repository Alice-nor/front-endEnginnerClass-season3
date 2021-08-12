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
    $str1 = '陳允傑\r\n';
    $str2 = '張三\r\n';
    $str3 = '李四\r\n';

    $fp = fopen($filename, 'r')
        or exit('檔案 '.$filename.' 開啟錯誤<br>');

    $fwrite($fp,$str1);
    $fwrite($fp,$str2);
    $fwrite($fp,$str3);
    print '新增檔案'.$filename.'成功<br>';
    fclose($fp);

    $num = readfile($filename);
    echo '<br>';
    $lines = file($filename);
    foreach($lines as $line_num => $line){
        echo $line_num.':'.$line;
    }
   
    ?>

</body>
</html>