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
    
    // 指定全域變數
    $a = 1;
    $b = 2;

    function funcA($a){
        $a = 3; // 指定參數
        $b = 4; // 指定區域變數
    }
    
    function funcB(){
        // 指定全域變數
        global $a, $b;
        $a = 3;
        $b = 4; 
    }
 
    ?>

    <p>PHP程式擁有全域變數 $a, $b</p>
    <p>funcA() 擁有參數 $a, 區域變數 $b</p>
    <p>funcB() 沒有區域變數</p>

    <table border="1">

    <?php

    print
    
    "<tr>
        <td>執行過程</td>
        <td>全域變數\$a</td>
        <td>全域變數\$b</td>
    </tr>
    <tr>
        <td>初值</td>
        <td>$a</td>
        <td>$b</td>
    </tr>";
    
    funcA($a); // 呼叫 funcA

    print 
    "<tr>
        <td>呼叫funcA()後</td>
        <td>$a</td>
        <td>$b</td>
    </tr>";

    funcB(); // 呼叫 funcB

    print 
    "<tr>
        <td>呼叫funcB()後</td>
        <td>$a</td>
        <td>$b</td>
    </tr>"

    ?>
    </table>


</body>
</html>