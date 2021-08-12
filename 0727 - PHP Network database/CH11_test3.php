<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>CH11_test3.php</title>
</head>
<body>
<?php
session_start();
//初始設定 session 變數
$pageRecord = '';
if (!isset($_SESSION['Page_record_num']))
  $_SESSION['Page_record_num']= 2; // 每頁紀錄數目設定
  $records_per_page=$_SESSION['Page_record_num']; 
if (isset($_POST["Update"])){ 
	//判斷每頁紀錄數目是否有變動?   
   if ($_SESSION['Page_record_num']!=$_POST["Page_record_num"]){	   
       $_SESSION['Page_record_num'] = $_POST["Page_record_num"];
       // 每一頁顯示的記錄筆數 
       $records_per_page = $_SESSION['Page_record_num'];
   }
   // 每一頁顯示的記錄筆數 
   else $records_per_page = $_SESSION['Page_record_num'];       
}
echo "每頁紀錄數 ".$records_per_page."<br/>"; 
// 取得URL參數的頁數
if (isset($_GET["Pages"])) $pages = $_GET["Pages"];
else                       $pages = 1;
require_once("myschool_open.inc");
// 執行SQL查詢
$result = mysqli_query($link, $sql);
$total_fields=mysqli_num_fields($result); // 取得欄位數
$total_records=mysqli_num_rows($result);  // 取得記錄數
// 計算總頁數
$total_pages = ceil($total_records/$records_per_page);
// 計算這一頁第1筆記錄的位置
$offset = ($pages - 1)*$records_per_page;
mysqli_data_seek($result, $offset); // 移到此記錄
echo "記錄總數: $total_records 筆<br/>";
echo "<table border=1><tr>";
while ( $meta=mysqli_fetch_field($result) )
   echo "<td>".$meta->name."</td>"; // 顯示紀錄的所有欄位
echo "</tr>";
$j = 1;
while ($rows = mysqli_fetch_array($result, MYSQLI_NUM)
       and $j <= $records_per_page) {
   echo "<tr>";
   for ( $i = 0; $i<= $total_fields-1; $i++ )
      echo "<td>".$rows[$i]."</td>";
   echo "</tr>";
   $j++;
}
echo "</table><br>";
if ( $pages > 1 )  // 顯示上一頁
   echo "<a href='CH11_test3.php?Pages=".($pages-1).
        "'>上一頁</a>| ";
for ( $i = 1; $i <= $total_pages; $i++ )
   if ($i != $pages)
    echo "<a href=\"CH11_test3.php?Pages=".$i."\">".
          $i."</a> ";
     
   else
     echo $i." ";
if ( $pages < $total_pages )  // 顯示下一頁
   echo "|<a href='CH11_test3.php?Pages=".($pages+1).
        "'>下一頁</a> ";
mysqli_free_result($result);  // 釋放佔用的記憶體
require_once("myschool_close.inc");

?>
<form method="post" action="CH11_test3.php">
每頁紀錄數&nbsp;
<input type="text" name="Page_record_num" 
   value='<?php ($pageRecord == 2)? 2 : $pageRecord ?>'
   size='<?php ($pageRecord == 2)? 2 : $pageRecord ?>'>
<input type="submit" name="Update" value="更改">
</form>
</body>
</html>
