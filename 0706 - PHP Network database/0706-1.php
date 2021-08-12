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

    // 範例 Ch5_2_2.php
    {
        print '--- 範例 Ch5_2_2.php ---';
        print '<br>';
        $name = '江小魚';
        $grade = 85;
    
        // if/else 條件敘述
        if( $grade >= 60) print $name.' 分數為 '.$grade.' 成績及格<br>';
        else print $name.' 分數為 '.$grade.' 成績不及格<br>';
    }
    




    // 範例 Ch05_練習3.php
    {
        print '<br><br>';
        print '--- 範例 Ch05_練習3.php ---';
        print '<br>';
    
        // 打折，與原價
        $a = 900;
        $b = 1500;
        $c = 2300;
        $discount = 0.85;
        {
            // 以下為練習
    
    
            // if($a >=1000){
            //     echo $a.'元打折後為'.$a*$discount85.'元<br>';
            // } else{
            //     echo $a.'元沒有打折<br>';
            // }
    
    
            // if($b >=1000){
            //     echo $b.'元打折後為'.$b*$discount85.'元<br>';
            // } else{
            //     echo $b.'元沒有打折<br>';
            // }
    
    
            // if($c >=1000){
            //     echo $c.'元打折後為'.$c*$discount85.'元<br>';
            // } else{
            //     echo $c.'元沒有打折<br>';
            // }
        }
        
        // 改寫為 function
        // 定義打折函式，參數給原價
        function discount($money){
            if($money >= 1000){
                echo $money.' 元打折後為 '.($money * 0.85).' 元<br>';
            }
            else{
                echo $money.' 元沒有打折<br>';
            }
        }
    
        discount($a);
        discount($b);
        discount($c);
    }
    





    // 範例 Ch05_練習2.php
    {
        print '<br><br>';
        print '--- 範例 Ch05_練習2.php ---';
        print '<br>';
        $a = 115;
        
        {
            // 練習
            // 打折，與原價
    
            // if($a >= 121){
            //     echo $a.'公分的小孩為全票<br>';
            // } else if (110 < $a && $a <= 120){
            //     echo $a.'公分的小孩為半票<br>';
            // } else{
            //     echo $a.'公分的小孩免費<br>';
            // }
        }
        
    
        // 函式練習
        function ticketBox($height){
            if($height >= 121){
                echo $height.' 公分的小孩為全票<br>';
            } else if (110 < $height && $height <= 120){
                echo $height.' 公分的小孩為半票<br>';
            } else{
                echo $height.' 公分的小孩免費<br>';
            }
        }
    
        ticketBox($a);
    }
    





     // 範例 Ch05_練習3.php
     {
        print '<br><br>';
        print '--- 範例 Ch05_練習3.php ---';
        print '<br>';
   
        $a =5; $b = 10;
        $op = '*';
        $c;
        print ('$a = '.$a.'<br>');
        print ('$b = '.$b.'<br>');
   
        switch ($op){
            case '*':
            print '執行乘法運算<br>';
            $c = $a * $b;
            break;
            case '/':
            print '執行除法運算<br>';
            $c = $a / $b;
            break;
            case '%':
            print '執行餘數運算<br>';
            $c = $a % $b;
            break;
        }
   
        print '運算結果 $a'.$op.' $b = '.$c;
     }
     



    // 範例 Ch05_練習4.php
    {
        print '<br><br>';
        print '--- 範例 Ch05_練習4.php ---';
        print '<br>';

        
        $total1 = 0;
        $total2 = 0;
        $total3 = 0;

        // 計算 $total1
        for($i = 1;$i <= 100;$i++){
            $total1+=$i;
            if($i%2==1){
                // 計算 $total2
                $total2+=$i;
            }
            if($i%2==0){
                // 計算 $total3
                $total3+=$i;
            }
        }

        print ('1+2+3....+100 = '.$total1.'<br>');
        print ('1+3+5....+99 = '.$total2.'<br>'); // 奇數
        print ('1+3+5....+99 = '.$total3.'<br>'); // 偶數

    }


    // 範例 Ch05_練習5.php
    {
        print '<br><br>';
        print '--- 範例 Ch05_練習5.php ---';
        print '<br>';

        // 120cm 的繩子對折幾次，才會小於 20cm？
        $foldNum = 0; // 對折幾次
        $length = 120; // 原本長度

        while($length >= 20){
            $length/=2;
            $foldNum++;
        }

        print '繩子對折的次數 = '.$foldNum.'<br>';
        print '繩子的長度 = '.$length;

    }
        


    // 範例 Ch05_練習6.php
    {
        print '<br><br>';
        print '--- 範例 Ch05_練習6.php ---';
        print '<br>';

        $year = 0;
        $amount = 10000; // 本金一萬
        $rate = 0.12; // 複利

        do {
            $interest = $amount * $rate; // 利息
            $amount += $interest; // 本利和
            $year++;
        } while ($year <=5 );

        print '本金 10000 ，利率 '.$rate.'<br>';
        print '5年後的本利和 '.$amount.'<br>';
        print '賺得利息 '.($amount-10000.0).'<br>';

    }
    ?>
</body>
</html>