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

    {
        // 傳回目前伺服器時間的時間刻記
        // 參數有 6 個，依序為整數的時、分、秒、月、日、年
        $stamps = mktime();
        echo $stamps;
        
        // 傳回目前伺服器時間（陣列）
        $today = getdate($stamps);
        print_r($today);
        print '<br>';



        $my_t=getdate(date("U"));
        print("$my_t[weekday], $my_t[month] $my_t[mday], $my_t[year]");

        
    }

    // date 測試
    {
        print '<br>--- date 測試 ---<br>';
        echo date("l F j y/m/d h:i:s A",time()).'<br>';
        echo date('l F j y/m/d h:i:s a').'<br>';
        echo 'Today is '.date('y/m/d F j l').'<br>';
    }
    
    // CH06_練習3
    {
        print '<br>--- CH06_練習3 ---<br>';
        // 請利用 PHP 時間函數分別算出
        // 2016/1/1 的二天前、5天後的日期(年/月/日)
        // 及目前時間的的日期(年/月/日/時:分:秒)，並將結果印出。

        function show($stamp){
            $d = getdate($stamp); // 顯示日期時間
            echo $d['year'].'/'.$d['month'].'/'.$d['mday'].' ';
            echo $d['hours'].':'.$d['minutes'].':'.$d['seconds'].'<br>';
        }

        date_default_timezone_set('Asia/Taipei'); // 宣告為台北時間
        $date = mktime(0,0,0,1,1,2016); // 取得 2016/1/1 時間刻記
        $today = mktime(); // 取得現在時間

        print '2016/01/01 2天前的時間為：<br>';
        echo show(strtotime('-2 days',$date).'<br>');
        print '2016/01/01 5天後的時間為：<br>';
        echo show(strtotime('+5 days',$date).'<br>');
        print '目前的時間為：<br>';
        echo show($today);


        
    }

    
    // isset() empty()
    {
        print '<br>--- 測試 isset() empty() ---<br>';

        $a = 0; 
        $b = 1;
        $c = '';
        $d;

        echo '$a = 0 / $b = 1 / $c = 空字串 / $d <br>';
        echo 'empty($a) -> '.empty($a).'<br>';
        echo 'isset($a) -> '.isset($a).'<br>';
        echo 'empty($b) -> '.empty($b).'<br>';
        echo 'isset($b) -> '.isset($b).'<br>';
        echo 'empty($c) -> '.empty($c).'<br>';
        echo 'isset($c) -> '.isset($c).'<br>';
        echo 'empty($d) -> '.empty($d).'<br>';
        echo 'isset($d) -> '.isset($d).'<br>';
        echo '<br>';
        echo 'gettype($c) -> '.gettype($c).'<br>';
        echo 'gettype($d) -> '.gettype($d).'<br>';





    }



    ?>

</body>
</html>