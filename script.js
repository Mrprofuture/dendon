const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      let valid = true;

      if (!usernameInput.value.trim()) {
        usernameError.textContent = 'Please enter your username or email.';
        valid = false;
      } else {
        usernameError.textContent = '';
      }

      if (!passwordInput.value) {
        passwordError.textContent = 'Please enter your password.';
        valid = false;
      } else if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        valid = false;
      } else {
        passwordError.textContent = '';
      }

      if (valid) {
        alert('Login successful! Welcome, ' + usernameInput.value.trim() + '.');
        form.reset();
      }
    });
