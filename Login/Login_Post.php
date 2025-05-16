<?php

include("../connect/connections.php");
session_start();

if(isset($_POST['lusername']) && isset($_POST['lpassword'])){
    $lusername=htmlentities(mysqli_real_escape_string($conn,stripcslashes(strtolower($_POST['lusername']))));
    $lpassword=htmlentities(mysqli_real_escape_string($conn,stripcslashes($_POST['lpassword'])));
}
else{
    $_SESSION['login_err']="<p class='errors'> Invalid login, please try again </p>";
    $err_n=1;
}

unset($_SESSION['login_err']);
$err_n=0;

$check_user="SELECT * FROM SAL WHERE username = '$lusername' AND password = '$lpassword'; ";
$check_result=mysqli_query($conn,$check_user);
$num_rows=mysqli_num_rows($check_result);

if($num_rows==0){
    $_SESSION['login_err']="<p class='errors'> Invalid login, please try again </p>";
    $err_n=1;
}

if($err_n==0){  
    header("location: ../Home/index.html");
}
else{
    header("location:index.php");
    
    
}