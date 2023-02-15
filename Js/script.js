// Log in functionality

const submit = document.getElementById('submit');

submit.addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const password = document.getElementById('user-password').value;
    
    if (email === 'baap@beta.com' && password === 'baapkabeta') {
        window.location.href = 'bank.html';
    } else {
        document.getElementById('message').textContent = 'Wrong email or password';
    }
});

// Forget password functionality

document.getElementById('forget').addEventListener('click', function() {
    const forgetButton = document.getElementById('forget');
    forgetButton.innerText = 'Email: baap@beta.com Password: baapkabeta';
});