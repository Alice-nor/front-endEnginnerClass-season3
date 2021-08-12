<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>CH08_練習2</h1>
    <p>3秒後轉址 http://www.hinet.net/</p>
    
    <?php
    header('Refresh:3; url= http://www.hinet.net');  
    ?>
</body>
</html>