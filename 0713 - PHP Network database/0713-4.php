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


    // 練習陣列
    {
        print '<br>--- 練習陣列 ---<br>';

        $cars = array('Volvo','BMW','Toyota');
        echo 'I like '.$cars[0].' , '.$cars[1].' , and '.$cars[2].'<br>';


        $names[0] = "江小魚";
        $names[1] = "陳允傑";
        $names[2] = "楊過"; 
        foreach($names as $name){
            echo 'name: '.$name.'<br>';
        };

    }


    // 練習實戰 (1) 再練習一次！
    {
        print '<br>--- 練習實戰 (1)---<br>';

        // 指定陣列元素
        $grades = array(78,55,69,93);
        $names[] ='江小魚';
        $names[] ='陳允傑';
        $names[] ='楊過';

        // 計算成績總分
        $grades[2] = 65; // 更改陣列值
        $total = 0;

        for($i = 0; $i < count($grades); $i++){
            echo $i.'=>'.$grades[$i].'<br>';
            $total += $grades[$i];
        }

        echo '成績總分： '.$total.' 分<br>';

        // 顯示名稱清單
        for($i = 0; $i < count($names); $i++){
            echo $i.'=>'.$names[$i].' ';
        }

        echo '<br>';

        $names[] = '陳會安'; // 新增陣列元素

        // 顯示名稱清單
        for($i = 0; $i < count($names); $i++){
            echo $i.'=>'.$names[$i].' ';
        }

    }


    // 練習實戰 (2)
    {
        print '<br><br>--- 練習實戰 (2)---<br>';

        // 指定陣列元素
        $grades = array(95,85,76,56);

        $total = 0; // 計算成績總分
        $avg = 0.0; // 平均

        echo '成績的內容為<br>';
        print_r($grades);

        // 使用 for 迴圈
        for($i = 0;$i < count($grades);$i++){
            $total += $grades[$i];
        }

        $avg = $total / count($grades);

        echo '<br>使用 for 迴圈算出 -----<br>';
        echo '四科總分：'.$total.' 分 <br>';
        echo '四科平均：'.$avg.' 分 <br>';


        // 使用 foreach 迴圈
        echo '使用 foreach 迴圈算出 -----<br>';
        $total = 0; // 重新計算
        foreach($grades as $element){
            $total += $element;
        }

        $avg = $total / count($grades);
        echo '四科總分：'.$total.' 分 <br>';
        echo '四科平均：'.$avg.' 分 <br>';


    }


    // 練習實戰 (1) 再練習一次！
    {
        print '<br>--- 練習實戰 (1)---<br>';

        // 指定陣列元素
        $grades = array(78,55,69,93);
        $names[] ='江小魚';
        $names[] ='陳允傑';
        $names[] ='楊過';

        // 計算成績總分
        $grades[2] = 65; // 更改陣列值
        $total = 0;

        for($i = 0; $i < count($grades); $i++){
            echo $i.'=>'.$grades[$i].'<br>';
            $total += $grades[$i];
        }

        echo '成績總分： '.$total.' 分<br>';

        // 顯示名稱清單
        for($i = 0; $i < count($names); $i++){
            echo $i.'=>'.$names[$i].' ';
        }

        echo '<br>';

        $names[] = '陳會安'; // 新增陣列元素

        // 顯示名稱清單
        for($i = 0; $i < count($names); $i++){
            echo $i.'=>'.$names[$i].' ';
        }

    }


    // 練習 Ch7_1_5.php 再看一遍！
    {
        print '<br><br>--- 練習 Ch7_1_5.php ---<br>';

        // 顯示陣列結果的方法
        function showArray($title,$arr){
            echo $title;
            print_r($arr);
            echo '<br>';
        }

        $tips = array(10,20,30,30);
        // php 索引陣列的相關函數
        // array_pad(array, int, value) 
        // 擴充陣列，若 int 為正則向右擴充一值 value
        // 若 int 為負則向左擴充一值 value
        echo '--- array_pad --<br>';
        showArray('參數陣列：',$tips);
        $result = array_pad($tips,-5,40);
        showArray('向左擴充陣列：',$result);
        $result = array_pad($tips,5,50);
        showArray('向右擴充陣列：',$result);

        // array_unique(array) 
        // 刪除傳址參數陣列中的重複元素
        echo '--- array_pad --<br>';
        $result = array_unique($tips);
        showArray('刪除重複元素： ',$result);

        $tips = array(10,20,30,30); // 重新定義

        // array_splice(array, offset, len, arr)
        // 刪除第1個傳址參數陣列中指定範圍的元素
        // offset是位移，如果是正值
        // 從位移開始刪除之後的所有元素
        // 0是全部刪除；負值是刪除倒數幾個元素之後的所有元素。
        // 如有len參數表示刪除len個元素
        // 如有arr參數，表示將刪除元素的位置取代成arr陣列
        echo '--- array_splice --<br>';
        $offset = 2; // 提供位移變數
        $len = 1; // 提供刪除之元素數量
        array_splice($tips,$offset,$len);
        showArray('刪除位移2的一個元素',$tips);

        $tips = array(10,20,30,30); // 重新定義
        array_splice($tips,1,1,array(40,50)); // 取代陣列元素
        showArray('刪除索引元素後取代陣列： <br>',$tips);
        
        $tips = array(10,20,30,30); // 重新定義

        // array_reverse(array)
        // 反轉參數的傳值陣列
        // 即第1個元素變成最後1個；最後1個成為第1個
        echo '--- array_reverse --<br>';
        $result = array_reverse($tips);
        showArray('反轉陣列： ',$result);


        // list(var1, var2, ….)
        // 將參數列指定成對應的陣列元素值
        echo '--- list --<br>';
        list($var1, $var2, $var3) = $tips; 
        echo '0: '.$var1.'1: '.$var2.'2: '.$var3.'<br>';


    }


    // 練習 Ch7_2_2.php 再看一遍！
    {
        print '<br><br>--- 練習 Ch7_2_2.php ---<br>';

        // 使用 array() 指定結合陣列的元素
        $arr = array('color' => '黑色', 'name' => 'Alex', 'shape' => '三角形',100);

        // 看看元素是否存在
        if(!isset($arr['type'])) {
            $arr['type'] = 'PHP'; // 不存在就新增
            echo '新增 type 元素值 PHP 成功！<br>';
        }

        // 顯示陣列元素
        foreach($arr as $key => $value){
            echo $key.' => '.$value.' <br>';
        }

        // 更改陣列元素
        $arr['color'] = '紅色';
        $arr['name'] = 'Nor';
        $arr['shape'] = '圓形';
        $arr[] = 50; // 沒有指定，鍵值為 0

        unset($arr['type']); // 刪除結合陣列元素
        echo '新增 type 元素值 PHP！<br>';
        
        // 顯示陣列元素
        print_r($arr);
        echo '<br>';

        // 建立索引從 1 開始的索引陣列
        $weekday = array( 1 => 'Mon','Tue','Wed','Thu','Fri','Sat','Sun');

        // 顯示陣列元素
        for( $i = 1; $i <= count($weekday); $i++){
            echo $i.': '.$weekday[$i].'<br>';
        }



    }



    // 練習實戰 (4) 再看一遍！
    {
        print '<br><br>--- 練習實戰 (4) ---<br>';

        // 學會使用函數的不定參數列
        
        // func_num_args()  
        // 取得傳入的函數參數個數

        // func_get_args()
        // 取得傳入的函數參數的陣列

        // func_get_arg(index)
        // 取得參數index的第幾個參數值，從0開始

        function score() { 
            $count = func_num_args();
            echo "分數個數: $count <br/>";

            // 顯示參數值
            for ( $i = 0; $i < $count; $i++ ) {
                $para = func_get_arg($i);
                echo '參數'.($i+1).' : '.$para.' ';
            } 
            
            $total = 0; // 總數
            $array = func_get_args(); // 取得陣列
            
            // 計算總和
            for ( $i = 0; $i < $count; $i++ ) {
                $total += $array[$i];
                
            } 
            echo '<br>分數總和: '.$total.'<br/>';
            echo '分數平均: '.$total / $count.'<br/>';
         }

         score(95,85,76,56);
         







    }



    // 練習 Ch7_3_2.php 再看一遍！
    {
    print '<br><br>--- Ch7_3_2.php ---<br>';

    // 學會如何排序陣列及搜尋陣列



    }



     // 練習 Ch7_4_5.php 再看一遍！
     {
        print '<br><br>--- Ch7_4_5.php ---<br>';
    
        $str1 = '"How to \'Programming\' \PHP\ Website"'; // 字串變數
        print ('測試字串1: '.$str1.'<br>'); // 在字元前加上反斜線
        echo addslashes($str1).'<br>'; // 刪除字元前的反斜線
        echo stripcslashes($str1).'<br>'; // 轉換成 HTML 符號
        $str = "if ( x < 5 && y >= 8 ) {\n sum(); \n } \n";
        echo nl2br(htmlentities($str)); // 刪除 HTML 標籤
        $str = '<table><tr><td>陳會安</td></tr></table>';
        echo strip_tags($str);

    
    
    
        }
    ?>
    
</body>
</html>