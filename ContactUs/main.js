function validateForm() {
   
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');
    
    formMessage.innerHTML = '';
    formMessage.className = '';
    
  
    if (name === '') {
      showError('Please enter your name');
      return false;
    }
    
   
    if (email === '') {
      showError('Please enter your email');
      return false;
    }

    
    
    if (!validateEmail(email)) {
      showError('Please enter a valid email address');
      return false;
    }
    
    
    if (message === '') {
      showError('Please enter your message');
      return false;
    }
    
    return true;
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function showError(message) {
    const formMessage = document.getElementById('form-message');
    formMessage.innerHTML = message;
    formMessage.className = 'error-message';
  }
  
  function showSuccess(message) {
    const formMessage = document.getElementById('form-message');
    formMessage.innerHTML = message;
    formMessage.className = 'success-message';
  }



function handleInputPlaceholders() {
  const inputs = document.querySelectorAll('.input-box input, .input-box textarea');

  inputs.forEach(input => {
    input.addEventListener('input', function() {
      const span = this.parentElement.querySelector('span');
      if (this.value.trim() !== '') {
        span.style.display = 'none';
      } else {
        span.style.display = 'inline'; 
      }
    });
  });
}


window.addEventListener('DOMContentLoaded', handleInputPlaceholders);

