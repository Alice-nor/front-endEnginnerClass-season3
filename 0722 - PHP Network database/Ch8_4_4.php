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

    $gender = $_POST['Gender']; // 取得性別
    $computer = $_POST['Computer']; // 取得電腦類型
    $webs = $_POST['Webs']; // 取得推薦網站

    // 性別
    switch ($gender){
        case 'male':
            print '性別 - 男<br>';
            break;
        case 'female':
            print '性別 - 女<br>';
            break;
    }

    // 電腦類型
    switch ($computer){
        case 'PC':
            print '使用PC<br>';
            break;
        case 'MAC':
            print '使用MAC<br>';
            break;
    }

    // 取得複選陣列
    if(isset($_POST['GC'])){
        print '使用 Google Chrome<br>';
    }
    if(isset($_POST['SF'])){
        print '使用 Safari<br>';
    }
    if(isset($_POST['FF'])){
        print '使用 Mozilla Firebox<br>';
    }

    // 取得清單方塊選項陣列的各元素
    foreach($webs as $vaule) {
        switch (trim($vaule)){
            case 'w1':
                print 'Yahoo!<br>';
                break;
            case 'w2':
                print 'Pchome<br>';
                break;
            case 'w3':
                print 'Hinet!<br>';
                break;
            case 'w4':
                print 'Google<br>';
                break;
        }
    }


    ?>
</body>
</html>