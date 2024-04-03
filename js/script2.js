function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Placeholder logic for login - replace this with your actual authentication mechanism
    if (username === 'user' && password === 'password') {
        alert('Login successful! Redirecting to homepage.');
        // Redirect to homepage after successful login
        window.location.href = 'index.html'; // Removed the dot and slash
    } else {
        alert('Invalid credentials. Please try again.');
    }
}


function showLogin() {
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.signup-container').style.display = 'none';
}
