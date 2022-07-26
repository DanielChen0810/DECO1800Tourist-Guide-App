<?php
include_once 'includes/db.php';

$sql = "UPDATE parks SET likes=likes+1 WHERE id=".$_POST["id"];

if (mysqli_query($conn, $sql)) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . mysqli_error($conn);
}

mysqli_close($conn);