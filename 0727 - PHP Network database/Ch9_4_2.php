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


    if(isset($_FILES['file'])){
        // 處理多個檔案
        for($i = 0; $i <3 ; $i++){
            $name = $_FILES['file']['name'][$i];
            $tmp = $_FILES['file']['tmp_name'][$i];
            if( !empty($name) ){
                // 上傳檔案
                copy($tmp, $name);
                echo '檔案'.$name.'上傳成功<br>';
                unlink($tmp);
            }
        }
    }

    ?>

    <form action="Ch9_4_2.php"
        method="post" enctype='multipart/form-data'>
    
    選擇檔案：<input type="file" name="file[]"><br>
    選擇檔案：<input type="file" name="file[]"><br>
    選擇檔案：<input type="file" name="file[]"><br>
    <input type="submit" name="Upload" value="上傳檔案">
 
    </form>


</body>
</html>