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

    // echo $i 本來應該是要直接輸出
    // 但因為有設置緩衝區，所以會先把輸出暫存
    // 做完緩衝與匹配後，ok 的才會輸出，沒有匹配的就清除

    for($i = 1; $i <=30; $i++){
        echo $i.'<br>';
        if(($i % 2) == 0){
            ob_flush(); // 輸出緩衝區
        }
        else {
            ob_clean(); // 清除緩衝區
        }
    }

    echo '只輸出偶數的數字<br>';
    ob_end_flush(); // 送出緩衝區內容且關閉緩衝區



    ?>




</body>
</html>