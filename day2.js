
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
          
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const emailError = document.getElementById('email-error');
            const passwordError = document.getElementById('password-error');
            
            // Reset errors
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            
            let isValid = true;
            
            // Email validation
            if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                emailError.style.display = 'block';
                isValid = false;
            }
            
            // Password validation
            if (!password.value || password.value.length < 6) {
                passwordError.style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                // Form is valid - you would normally submit to server here
                alert('Login successful! (This is a demo)');
            }
        });