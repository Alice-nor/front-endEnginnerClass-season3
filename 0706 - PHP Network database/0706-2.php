<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .span{
            color:red;
            margin:0;
        }
    </style>
</head>
<body>
    

<!-- 練習 function -->
    <?php
    // 範例 Ch06_2_1.php
    {
        print '<p class="span">--- 範例 Ch06_2_1.php ---</p>';
        // 函數顯示標題文字
        function printHeader(){
            print '<h3>PHP與MySQL網頁設計</h3>';
            echo '<hr/>';
            // hr 為 Horizontal Line，有底線
        }

        // 函數顯示註腳文字
        function printFooter(){
            print '<hr/>(c)Copyright by Alice<br>';
        }


        // 操作與顯示
        printHeader();
        print '<p>在php程式使用函數建立標題和註腳文字</p>';
        printFooter();
        
    }
      
    

    // 範例 Ch06_2_2.php
    {
        print '<br><br>';
        print '<p class="span">--- 範例 Ch06_2_2.php ---</p>';
        
        // 匯率換算的函式
        function rateExchange($amount,$rate){
            return $amount * $rate;
        }

        // 操作與顯示
        $amount = 1000;
        $rate = 32.5; // 匯率
        
        // 呼叫函式
        $result = rateExchange($amount,$rate);
        print $amount.' 美金兌換新台幣 = '.$result.' 元';
        
    }


    // 範例 Ch06_練習1.php
    {
        print '<br><br>';
        print '<p class="span">--- 範例 Ch06_練習1.php ---</p>';
        
        function a($a1,$a2){
            if($a1 > $a2) return $a1 + $a2;
            else return $a1 * $a2;
        }

        function b($a1,$a2){
            if($a2 == 0) return -1;
            else return $a1 / $a2;
        }

        // 操作與顯示
        $a1 = 25;
        $a2 = 30;
        
        // 呼叫函式
        print '函數a(): '.a($a1, $a2).'<br>';
        print '函數b(): '.b($a1, $a2).'<br>';
    
    }


    // 範例 Ch06_練習2.php
    {
        print '<br><br>';
        print '<p class="span">--- 範例 Ch06_練習2.php ---</p>';
        
        function average($s1,$s2,$s3){
            return ($s1 + $s2 + $s3) / 3;
        }

        function sum($s1,$s2,$s3){
            return ($s1 + $s2 + $s3);
        }

        // 操作與顯示
        $s1 = 77;
        $s2 = 88;
        $s3 = 56;
        
        // 呼叫函式
        print '第一位學生成績 '.$s1.'<br>';
        print '第二位學生成績 '.$s2.'<br>';
        print '第三位學生成績 '.$s3.'<br>';
        print '成績平均: '.average($s1, $s2, $s3).'<br>';;
        print '成績總和: '.sum($s1, $s2, $s3).'<br>';
        

    }
  ?>


</body>
</html>