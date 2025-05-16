<?php

include("../connect/connections.php");
session_start();


if(isset($_POST['submit'])){
    $username=htmlentities(mysqli_real_escape_string($conn,stripcslashes(strtolower($_POST['username']))));
    $email=htmlentities(mysqli_real_escape_string($conn,stripcslashes(strtolower($_POST['email']))));
    $password=htmlentities(mysqli_real_escape_string($conn,stripcslashes($_POST['password'])));
}

unset($_SESSION['username_err']);
unset($_SESSION['email_err']);
unset($_SESSION['password_err']);


$_SESSION['username']=$username;
$_SESSION['email']=$email;
$_SESSION['password']=$password;
$err_n=0;


$check_user="SELECT * FROM SAL WHERE username = '$username';";
$check_result=mysqli_query($conn,$check_user);
$num_rows=mysqli_num_rows($check_result);


$check_email="SELECT * FROM SAL WHERE email = '$email';";
$check_result_email=mysqli_query($conn,$check_email);
$num_rows_email=mysqli_num_rows($check_result_email);

if($num_rows){
    $_SESSION['username_err']="<p class='errors'> Error: Username Already Exists. </p>";
    $err_n=1;
}
if($num_rows_email){
    $_SESSION['email_err']="<p class='errors'> Error: Email Already Exists. </p>";
    $err_n=1;
}

if(is_numeric($username[0])){
    $_SESSION['username_err']="<p class='errors'> Error: Enter a valid Username not Number. </p>";
    $err_n=1;
}
else if(filter_var($username,FILTER_VALIDATE_INT)){
    $_SESSION['username_err']="<p class='errors'> Error: Enter a valid Username not Number. </p>";
    $err_n=1;
}
else if(strlen($username)<6){
    $_SESSION['username_err']="<p class='errors'> Error: Username must be at least 6 Characters. </p>";
    $err_n=1;
}
if(is_numeric($email[0])){
    $_SESSION['email_err']="<p class='errors'> Error: Invalid Email address. </p>";
    $err_n=1;
}
else if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
    $_SESSION['email_err']="<p class='errors'> Error: Invalid Email address. </p>";
    $err_n=1;
}
else if(is_numeric($email[strlen($email)-1])){
    $_SESSION['email_err']="<p class='errors'> Error: Invalid Email address. </p>";
    $err_n=1;
}

if(empty($password)){
    $_SESSION['password_err']="<p class='errors'> Error: Invalid Password. </p>";
    $err_n=1;
}
else if(strlen($password)<6){
    $_SESSION['password_err']="<p class='errors'> Error: Password must be at least 6 Characters. </p>";
    $err_n=1;
}

if($err_n==0 && $num_rows==0 && $num_rows_email==0){
    
$_SESSION['username']="";
$_SESSION['email']="";
$_SESSION['password']="";


$sql="INSERT INTO SAL(username,email,password) VALUES('$username','$email','$password')";
mysqli_query($conn,$sql);
header("location:../Login/index.php");
}

else{
    header("location:index.php");
}