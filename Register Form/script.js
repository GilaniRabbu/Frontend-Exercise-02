document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return; // Prevent form submission
    } else {
        errorMessage.textContent = ""; // Clear any previous error message
    }

    var userInfo = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    alert('User information saved!');
});