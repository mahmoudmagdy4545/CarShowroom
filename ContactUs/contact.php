<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo '<script>showError("Please enter a valid email address");</script>';
        exit;
    }

    $to = "moaty.mohamed897@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    
    
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
  
    if (mail($to, $subject, $body, $headers)) {
        echo '<script>
                showSuccess("Thank you! Your message has been sent.");
                document.getElementById("contact-form").reset();
              </script>';
    }
     else {
       
        $error = error_get_last();
        echo '<script>showError("Failed to send. Server said: '.addslashes($error['message']).'");</script>';
    }
}
?>