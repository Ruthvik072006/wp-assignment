document.addEventListener('DOMContentLoaded', () => {
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');

    // Tab Switching
    tabLogin.addEventListener('click', () => {
        formLogin.style.display = 'block';
        formRegister.style.display = 'none';
        tabLogin.style.color = 'white';
        tabRegister.style.color = 'var(--text-muted)';
    });

    tabRegister.addEventListener('click', () => {
        formLogin.style.display = 'none';
        formRegister.style.display = 'block';
        tabRegister.style.color = 'white';
        tabLogin.style.color = 'var(--text-muted)';
    });

    // Validation functions
    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const showError = (id) => {
        document.getElementById(id).style.display = 'block';
        document.getElementById(id.replace('-error', '')).style.borderColor = '#ef4444';
    };

    const hideError = (id) => {
        document.getElementById(id).style.display = 'none';
        document.getElementById(id.replace('-error', '')).style.borderColor = 'var(--border)';
    };

    // Login Form Validation
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (!isValidEmail(email)) {
            showError('login-email-error');
            isValid = false;
        } else {
            hideError('login-email-error');
        }

        if (password.trim() === '') {
            showError('login-password-error');
            isValid = false;
        } else {
            hideError('login-password-error');
        }

        if (isValid) {
            alert('Login successful!');
            window.location.href = 'index.html';
        }
    });

    // Register Form Validation
    formRegister.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirm').value;

        if (name.trim().length < 3) {
            showError('reg-name-error');
            isValid = false;
        } else {
            hideError('reg-name-error');
        }

        if (!isValidEmail(email)) {
            showError('reg-email-error');
            isValid = false;
        } else {
            hideError('reg-email-error');
        }

        if (password.length < 6) {
            showError('reg-password-error');
            isValid = false;
        } else {
            hideError('reg-password-error');
        }

        if (password !== confirmPassword || confirmPassword === '') {
            showError('reg-confirm-error');
            isValid = false;
        } else {
            hideError('reg-confirm-error');
        }

        if (isValid) {
            alert('Registration successful! Please log in.');
            tabLogin.click();
            formRegister.reset();
        }
    });
});
