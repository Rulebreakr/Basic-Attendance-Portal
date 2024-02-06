document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Perform login logic here
});

document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const course = document.getElementById('course').value;
    const date = document.getElementById('date').value;
    // Perform attendance submission logic here
});