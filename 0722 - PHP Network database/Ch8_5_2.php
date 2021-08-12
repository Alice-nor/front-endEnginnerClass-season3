<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <!-- 學習 cookies 的設定送出並取得 -->
    <?php
    
    // 檢查 cookie 是否存在
    if(isset($_COOKIE['ItemName'])){
        $itemName = $_COOKIE['ItemName']; // 取得 cookie 值
        $quantity = $_COOKIE['Quantity'];
        print '取得 ItemName 的 cookie 值：'.$itemName.'<br>';
        print '取得 Quantity 的 cookie 值：'.$quantity.'<br>';

        // 刪除 cookie
        setcookie('ItemName','',time()-3600);
        setcookie('Quantity','',time()-3600);

    }

    // 若不存在
    else {
        $itemName = '白色 iPhone'; // 指定變數值
        $quantity = '10'; 
        // 有效有效期限為 10 天後
        $date = strtotime('+10 days',time());
        setcookie('ItemName', $itemName, $date); // 新增 cookie
        setcookie('Quantity', $quantity, $date); // 新增 cookie

        // 顯示建立的 cookie 資料
        print '新增名為 ItemName 的 cookie ：'.$itemName.'<br>';
        print '新增名為 Quantity 的 cookie ：'.$quantity.'<br>';
        print 'cookie 期限：'.date('l F j Y h:i:s A',$date);
    }


    ?>

    <br><a href="Ch8_5_2.php">取得 cookie 值</a>
</body>
</html>