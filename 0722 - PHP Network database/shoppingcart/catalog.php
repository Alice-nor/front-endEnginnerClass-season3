<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>catalog.php</title>
<?php
session_start();  // 啟用交談期
// 檢查是否是表單送回
if ( isset($_POST["Item"]) ) {
   // 取得購買的數量
   $_SESSION["Quantity"] = $_POST["Quantity"];
   $id = $_POST["Item"];  // 取得選擇商品
   $_SESSION["ID"] = $id; // 建立Session變數
   switch (strtoupper($id)) {
      case "S001":
         $_SESSION["Name"] = "10吋變形平板";
         $_SESSION["Price"] = 12000;
         break;
      case "S002":
         $_SESSION["Name"] = "15.6吋筆記型電腦";
         $_SESSION["Price"] = 27000;
         break;
      case "S003":
         $_SESSION["Name"] = "iPhone手機";
         $_SESSION["Price"] = 21000;
         break;   
      case "S004":
         $_SESSION["Name"] = "任天堂 Nintendo Switch";
         $_SESSION["Price"] = 14890;
         break;
      case "S005":
         $_SESSION["Name"] = "SONY DSC-RX100M7G數位相機";
         $_SESSION["Price"] = 32980;
         break;   
   }  
   header("Location: savecart.php");  // 轉址
}
?>
</head>
<body bgcolor="#FFCC77" text="blue">
<form action="catalog.php" method="post">
選擇商品: 
<select name="Item">
  <option value="S001">10吋變形平板 - $12000</option>
  <option value="S002">15.6吋筆記型電腦 - $27000</option>
  <option value="S003">iPhone手機 - $21000</option> 
  <option value="S004">任天堂 Nintendo Switch - $14890</option> 
  <option value="S005">SONY DSC-RX100M7G數位相機 - $32980</option> 
</select>
<input type="text" size="5" name="Quantity" value="1"/>
<input type="submit" value="訂購"/>
</form>
<hr/>| <a href="catalog.php">商品目錄</a>
| <a href="shoppingcart.php">檢視購物車</a> |
</body>
</html>