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

    header('Content-Type:text/html; charset=utf-8'); // 告訴瀏覽器這是 utf-8 編碼

    // 判斷上傳按鈕是否有點選
    if(isset($_POST['submit'])){

        // 判斷檔案是否有選擇上傳
        if(isset($_FILES['file'])){
            echo '上傳檔案資訊：<br>';
            echo '檔案名稱：'.$_FILES['file']['name'].'<br>';
            echo '檔案類型：'.$_FILES['file']['type'].'<br>';
            echo '檔案大小：'.($_FILES['file']['size']/ 1024).'kb<br>';
            echo '暫存名稱：'.$_FILES['file']['tmp_name'].'<br>';
        }
        if(copy($_FILES['file']['tmp_name'],$_FILES['file']['name'])){
            // 將暫存檔案複製
            echo '檔案上傳成功<br>';
            unlink($_FILES['file']['tmp_name']); // 將暫存檔案清除
        } else {
            echo '檔案上傳失敗<br>';
        }
    }
    

    ?>

    <form action="Ch09_test3.php"
        method="post" enctype='multipart/form-data'>   
    選擇檔案：<input type="file" name="file"><br>
    <input type="submit" name="submit" value="上傳檔案">
    </form>


</body>
</html>