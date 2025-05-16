<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Car Showroom Login</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="login-container">
    <h1>Login</h1>

    <form action="Login_Post.php" method="POST">
    <?php
    if(isset($_SESSION['login_err'])){
      echo $_SESSION['login_err'];
    }
    ?>
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="lusername" placeholder="Enter your username" required />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="lpassword" placeholder="Enter your password" required />
      </div>
      <script>
window.onload=function(){
  <?php
  $_SESSION['login_err']="";
  ?>
}
      </script>
      <button type="submit">Login</button>
      <p>Dont have an account? <a href="../SignUp/index.php">Sign up</a></p>
    </form>
  </div>
</body>
</html>