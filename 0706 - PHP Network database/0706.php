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
    
    // Pratice 1
    // 變數與指定敘述
    $stuName = '陳允傑';
    $no = 1234567;
    $englishGrade = 65;
    
    // 顯示變數的內容
    print '--- Pratice 1 ---<br>';
    print '姓名： '.$stuName.'<br>';
    print '學號： '.$no.'<br>';
    print '英文成績： '.$englishGrade.'<br><br>';
    
    

    // Pratice 2
    // 變數與指定敘述
    $str = 'PHP+MySQL+AXAJ網頁程式設計';
    $str2 = 'Hello World!';

    // 顯示變數的內容
    echo '--- Pratice 2 ---<br>';
    echo '$str ='.$str.'<br>';
    echo '$str2 ='.$str2.'<br>';
    echo '換行 符號<br>';
    echo '"Escape"溢出字元<br>';
    echo '\'PHP\'與MySQL網頁\\設計\\<br><br>';



    // Pratice 3
    // 變數與指定敘述
    $a = 15;
    $b = 5;
    $c = ($a+$b)*($a-$b);

    // 顯示變數的內容
    echo '--- Pratice 3 ---<br>';
    echo '$a ='.$a.'<br>';
    echo '$b ='.$b.'<br>';
    echo '$c ='.$c.'<br><br>';



    // Pratice 4
    // 變數與指定敘述
    $a = 245;
    $b = 156.123;
    $c = false;
    $d = NULL;
    $e = 'This is a pen.';

    // 顯示變數的內容
    echo '--- Pratice 4 ---<br>';
    echo '$a datatype = '.gettype($a).'<br>';
    echo '$b datatype = '.gettype($b).'<br>';
    echo '$c datatype = '.gettype($c).'<br>';
    echo '$d datatype = '.gettype($d).'<br>';
    echo '$e datatype = '.gettype($e).'<br><br>';


    // Pratice 5
    // 變數與指定敘述
    $a = 250; // 現有 250 顆蛋
    $b = 250/12; // 有幾打蛋
    $c = 250%12; // 剩下幾顆蛋

    // 顯示變數的內容
    echo '--- Pratice 5 ---<br>';
    echo '250 顆蛋，共有幾打？剩下幾顆？<br>';
    echo '有 '.(int)$b.' 打蛋<br>';
    echo '還剩下 '.$c.' 顆蛋<br><br>';

    ?>
</body>

</html>