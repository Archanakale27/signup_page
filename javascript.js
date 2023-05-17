function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    // Check if email is valid
    var emailRegex = /^\S+@\S+\.\S+$/;
  
    // Check if any field is empty
    if (firstName === '') {
      document.getElementById('firstname_error').innerHTML ="Please fill firstName";
      
    }
    else if (lastName === '') {
        document.getElementById('lastname_error').innerHTML ="Please fill lastName";
        
    }
    else if (email === '') {
       document.getElementById('email_error').innerHTML ="Please fill email";
       
    }
    else if (password === '') {
        document.getElementById('password_error').innerHTML ="Please fill Password";
        
    }
    else if (confirmPassword === '') {
        document.getElementById('confirmPassword_error').innerHTML ="Please fill ConfirmPassword";
        
     }
    
    // Check if passwords match
    else if (password !== confirmPassword) {
      document.getElementById('confirmPassword_error').innerHTML ="Passwords do not match";
      
    }
    else if (!email.match(emailRegex)) {
      document.getElementById('email_error').innerHTML ="Invalid email address";
      
    }
    else{
        alert('Form is Submitted');
    }
  
    // All validations passe
  }

  