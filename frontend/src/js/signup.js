let signup = document.getElementById('signup')
let email = document.getElementById('email')
let password = document.getElementById('password')
let repeatPassword = document.getElementById('password-confirm')
let name = document.getElementById('name')
let nameRegex = /(^[А-Яа-я]{3,16})([ ]{0,1})([А-Яа-я]{3,16})?([ ]{0,1})?([А-Яа-я]{3,16})?([ ]{0,1})?([А-Яа-я]{3,16})/
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
let emailRegex = /^\w+(-?\w+)*@\w+(-?\w+)*(\.\w{2,3})+$/;

signup.onclick = () => {
    let nameValid = true
    let emailValid = true
    let passwordValid = true
    let repeatValid = true

    if(!name.value || !name.value.match(nameRegex)) {
        name.parentElement.classList.add('error')
        nameValid = false
    } else {
        name.parentElement.classList.remove('error')
        nameValid = true
    }

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

    if(!repeatPassword.value || repeatPassword.value !== password.value) {
        repeatPassword.parentElement.classList.add('error')
        repeatValid = false
    }
    else {
        repeatPassword.parentElement.classList.remove('error')
        passwordValid = true
    }


    // } else {
    //     repeatPassword.parentElement.classList.remove('error')
    //     repeatValid = true
    // }

    if (repeatValid && passwordValid && nameValid && emailValid) {
        location.href = 'main.html'
    } else {
        alert('ошибка входа')
    }

}