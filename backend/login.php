<?php
include('db.php');

$UserEmail = $decodedData['Email'];
$UserPW = ($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM admin WHERE email = '$UserEmail'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['password'] != $UserPW) {
        $Message = "pw WRONG";
    } else {
        $Message = "Success";
    }
} else {
    $Message = "No account yet";
}

$response[] = array("Message" => $Message);
echo json_encode($response);