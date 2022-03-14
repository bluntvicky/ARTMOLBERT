const modalAuth = document.querySelector('.modal-auth')
const buttonAuth = document.querySelector('.btn-buy')
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')
const inputName = document.getElementById('name')
const inputSurname = document.getElementById('surname')
const inputEmail = document.getElementById('email')
const inputPhone = document.getElementById('phone')

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

     if(inputName.value == '') {
        alert('Введите Имя');
        return false;
    }
    if(inputSurname.value == '') {
        alert('Введите Фамилию');
        return false;
        }
     if(inputEmail.value == '') {
        alert('Введите почту');
        return false;
    }
    if(inputPhone.value == '') {
        alert('Введите номер телефона');
        return false;
    }
    const user = {
        name: inputName.value,
        surname: inputSurname.value,
        email: inputEmail.value,
        phone: inputPhone.value

    }    
})