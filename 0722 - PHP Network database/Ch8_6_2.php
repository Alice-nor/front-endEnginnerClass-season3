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
    
    session_start(); // 啟用交談期
    echo '啟用交談期<br>';

    // 給交談期一個計數器
    if(!isset($_SERVER['page_counter'])){
        $_SESSION['page_counter'] = 1; // 新增 session 變數
    } else{ 
        // 將使用者進入網頁的次數加一
        $_SESSION['page_counter']++;
    }

    $value = $_SESSION['page_counter']; // 取得 session 變數
    echo '使用者 Session ID:'.session_id().'<br>';
    echo '進入網頁次數:'.$value.'<br>';
    
    if($value >= 5){
        // 如果次數大於等於 5
        // 刪除 Session 變數
        unset($_SESSION['page_counter']);
        // 計數器不存在了，印出結果
        if(!isset($_SESSION['page_counter'])){
            echo 'Session 變數 page_counter 不存在！<br>';
            session_destroy(); // 關閉交談期
            echo '關閉交談期<br>';
        }
    }
    
    
    
    
    
    ?>
</body>
</html>