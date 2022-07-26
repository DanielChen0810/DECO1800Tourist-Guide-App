<?php
include_once 'includes/db.php';
// $result = mysqli_query($conn, "SELECT JSON_ARRAYAGG(JSON_OBJECT('id',id,'name',name,'description',description,'lng',lng,'lat',lat,'likes',likes)) FROM parks order by likes desc");
$result = mysqli_query($conn, "SELECT * FROM parks order by likes desc");
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
print json_encode($rows);
