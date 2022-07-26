<?php
$url='127.0.0.1';
$username='root';
$password='mysql';
$conn=mysqli_connect($url,$username,$password,"bb-adv_db");
if(!$conn){
 die('Could not Connect My Sql:' .mysql_error());
}
?>