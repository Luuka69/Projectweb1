function sendMessage() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    let isValid = true;

    
    if (!isValidName(nameInput.value)) {
        showError(nameError, 'Name must be at least 3 letters and doesnt contain special characters.');
        isValid = false;
    }

    
    if (!validateEmail(emailInput.value)) {
        showError(emailError, 'Enter a valid email address.');
        isValid = false;
    }

    
    if (messageInput.value.trim().length === 0) {
        showError(messageError, 'Message is required.');
        isValid = false;
    }

    if (isValid) {
        
        alert('Message sent successfully!');
    }
}

function isValidName(name) {
    const nameRegex = /^[A-Za-z]{3,}$/;
    return nameRegex.test(name);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}