<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php

    include "Ch6_4_1.inc"; // 印出一次
    include_once ("Ch6_4_2.php");

    ?>
</head>
<body>
    
    <?php


    require 'Ch6_4_1.inc'; // 印出第二次
    $amount = 1000;
    $rate = 32.5;

    // 呼叫函式
    $result = rateExchange($amount, $rate);
    print '1000美金兌換新台幣 = '.$result.'元<br>';

    require ("Ch6_4_1.inc"); // 印出第三次
    $file = "Ch6_4_1.inc";
    require $file; // 印出第四次


    ?>




</body>
</html>