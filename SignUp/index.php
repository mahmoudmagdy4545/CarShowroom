<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sign Up</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <div class="signup-container">

  <?php
$_SESSION['login_err']="";
  ?>
    <h2>Create Account</h2>

    <form id ="myForm" action="SignUp_Post.php" method="POST">
      <input type="text" placeholder="Username" name="username" value="<?php echo $_SESSION['username'] ?>" required>

       <?php
    if(isset($_SESSION['username_err'])){
      echo  $_SESSION['username_err'];
    }
    ?>

     
      <input type="email" placeholder="Email Address" name="email" value="<?php echo $_SESSION['email'] ?>" required>


 <?php
    if(isset($_SESSION['email_err'])){
      echo $_SESSION['email_err'];
    }
    ?>
      
      <input type="password" placeholder="Password" name="password" value="<?php echo $_SESSION['password'] ?>" required>
      
      <?php
    if(isset($_SESSION['password_err'])){
      echo $_SESSION['password_err'];
    }
    ?>
      <button type="submit" name="submit">Sign Up</button>
    </form>

    <script>
window.onload = function() {
<?php
  
$_SESSION['username']="";
$_SESSION['email']="";
$_SESSION['password']="";
unset($_SESSION['username_err']);
unset($_SESSION['email_err']);
unset($_SESSION['password_err']);
  ?>
};
</script>

    <p>Already have an account? <a href="../Login/index.php">Log In</a></p>
  </div>

</body>
</html>