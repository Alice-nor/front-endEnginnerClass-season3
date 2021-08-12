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

    // Ch6_6_3 .php
    {
        print '<br>--- Ch6_6_3 .php ---<br>';
        // 練習自訂錯誤處理機制


        // 設定報告等級
        error_reporting(E_ERROR | E_WARNING | E_NOTICE);

        // 自訂的錯誤處理函式
        function myErrorHandler($type,$msg,$file,$line){
            switch($type){
                case E_ERROR: echo '<b>致命錯誤：<b><br>';
                break;
                case E_WARNING: echo '<b>警告錯誤：<b><br>';
                break;
                case E_NOTICE: echo '<b>注意錯誤：<b><br>';
                break;
            }

            // 建立錯誤訊息
            $err = "檔案： ".$file." 第： ".$line." 行<br>";
            $err .= "錯誤訊息： <b>".$msg."<b/><br>";

            echo $err;
            error_log($err, 3, "error.log"); // 寫入記錄檔案
            if( $type == E_ERROR){
                echo '<font color=red>終止程式執行</font>';
                die(); // 終止程式執行
            }


        }


        // 指定錯誤處理函式
        set_error_handler('myErrorHandler');

 

        // 以下為錯誤內容
        $var++; // 產生注意錯誤
        $x = 0;
        $y = 10;
        $c = $y / $x; // 產生警告錯誤

        echo '測試自訂PHP的錯誤處理函式結束...<br>';



    }



    ?>

</body>
</html>