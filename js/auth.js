const modalAuth = document.querySelector('.modal-auth')
const buttonAuth = document.querySelector('.button_auth')
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')
const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')

const login = (user) => {
    modalAuth.style.display = 'none'
}

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
})
closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none'
})

logInForm.addEventListener('submit', (event) => {
    event.preventDefault()

     if(inputLogin.value == '') {
        alert('Введите логин и пароль');
        return false;
    }
    if(inputPassword.value == '') {
        alert('Введите пароль');
        return false;
    }
    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }    
})