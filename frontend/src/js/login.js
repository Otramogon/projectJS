let login = document.getElementById('login');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
let emailRegex = /^\w+(-?\w+)*@\w+(-?\w+)*(\.\w{2,3})+$/;


login.onclick = () => {

    let emailValid
    let passwordValid

    if(!email.value || !email.value.match(emailRegex)) {
        email.parentElement.classList.add('error')
        emailValid = false
    } else {
        email.parentElement.classList.remove('error')
        emailValid = true
    }

    if(!password.value || !password.value.match(passwordRegex)) {
        password.parentElement.classList.add('error')
        passwordValid = false
    } else {
        password.parentElement.classList.remove('error')
        passwordValid = true
    }

    if (emailValid && passwordValid) {
        location.href = 'main.html'
    } else {
        alert('ошибка входа')
    }

}