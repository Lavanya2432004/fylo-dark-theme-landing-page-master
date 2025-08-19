const emailInput = document.getElementById('email');
const emailSubmitBtn = document.getElementById('submit-form');
const emailAlert = document.getElementById('email-error');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

emailSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = emailInput.ariaValueMax.trim()

    if(validateEmail(email)) {
        emailInput.value = ""
        emailAlert.classList.remove(active)
    } else {
        emailAlert.classList.add('active')
    }
})