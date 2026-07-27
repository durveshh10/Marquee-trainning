const passwordInput = document.querySelector('.password');
const submitButton = document.querySelector('.btn');
submitButton.addEventListener('click', () => {
    const password = passwordInput.value;
    const minLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    if (!minLength) {
        alert('Password must be at least 8 characters long.');
    } else if (!hasUppercase) {
        alert('Password must contain at least one uppercase letter.');
    } else if (!hasLowercase) {
        alert('Password must contain at least one lowercase letter.');
    } else if (!hasNumber) {
        alert('Password must contain at least one number.');
    } else {
        alert('Password is valid and secure!');
    }
});