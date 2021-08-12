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
    
    // PHP_Ch05 流程控制 觀念加強題
    // 練習 1
    {
        print '--- 練習 1 ---<br>';
        for($i = 1; $i < 3; $i ++){
            echo $i.' ';
        }
    }

    // 練習 2
    {
        echo '<br>--- 練習 2 ---<br>';
        $i = 3;
        while($i>1){
            echo $i.' ';
            $i--;
        }
    }

    // 練習 3
    {
        echo '<br>--- 練習 3 ---<br>';
        for($i = 0; $i <=10; $i++){
            if($i % 2 == 0){
                // 如果是偶數才印出
                echo $i.' ';
            }
        }
    }


    // 練習 4
    {
        echo '<br>--- 練習 4 ---<br>';
        $i = 1;
        while($i<=5){
            echo $i.' ';
            $i+=2;
        }
    }        

    // 練習 5
    {
        echo '<br>--- 練習 5 ---<br>';
        $i = 5;
        do{
            $i++;
            echo $i.' ';
        } while($i<8);
    }   

    // 練習 6
    {
        echo '<br>--- 練習 6 ---<br>';
        $sum = 0;
        for($i = 0;$i <=5; $i++){
            if($i==4){
                break;
            };
            $sum+=$i;
        }

        echo $sum;
    }     


    // 練習 7
    {
        echo '<br>--- 練習 7 ---<br>';
        $i = 0;
        $s = ' ';
        while($i <5){
            if($i%2==0){
                $s = $s.'a';
            } else {
                $s='b'.$s;
            }
            $i++;
        }

        echo $s;
    }    


    // 練習 8
    {
        echo '<br>--- 練習 8 ---<br>';
        $i = 5;
        do{
            echo $i.' ';
            $i--;
            if($i == 3){
                break;
            }
        } while($i>0);

    }  

    // 練習 9
    {
        echo '<br>--- 練習 9 ---<br>';
        for($i = 1;$i <=6;$i++){
            switch($i%3){
                case 0: echo 'a'; break;
                case 1: echo 'b'; break;
                case 2: echo 'b'; break;
            }
        }

    }   
    
    // 練習 10
    {
        echo '<br>--- 練習 10 ---<br>';
        for($i = 1;$i <=3;$i++){
            $j = 0;
            while($j < 4){
                echo $j.' ';
                $j++;
            }
        }
    }

    ?>
    
</body>
</html>