function validate(){
    var name = document.getElementsByName("name")[0].value;
    var surname = document.getElementsByName("surname")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("pw")[0].value;
    var password2 = document.getElementsByName("confirmPW")[0].value;
    var phoneNumber = document.getElementsByName("number")[0].value;
    let avviso = document.querySelector('.error>span')
    let error= document.querySelector('.error')
    if(phoneNumber.length < 10){
        setTimeout(() => {
            avviso.classList.remove('hidden')
            error.classList.remove('hidden')
            avviso.classList.add('avviso5')
            }, 0)
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        setTimeout(() => {
            avviso.classList.remove('hidden')
            error.classList.remove('hidden')
            avviso.classList.add('avviso3')
            }, 0)
        return false;
    }
    if(password.length < 6){
        setTimeout(() => {
            avviso.classList.remove('hidden')
            error.classList.remove('hidden')
            avviso.classList.add('avviso4')
            }, 0)
        return false;
    }
    if(password != password2){
        setTimeout(() => {
            avviso.classList.remove('hidden')
            error.classList.remove('hidden')
            avviso.classList.add('avviso2')
            }, 0)
        return false;
    }else {
        return true;
    }
}


let inputs = document.querySelectorAll('input')
function checkInput() {
    let check = true
    inputs.forEach(input => {
        if (input.value === '') {
            check = false
        }
    })
    return check
}
/*let btn = document.querySelector('.btn')
btn.addEventListener('click', (e) => {
    let avviso = document.querySelector('.error>span')
    let error= document.querySelector('.error')
    if (!checkInput()) {
        e.preventDefault()
        setTimeout(() => {
        avviso.classList.remove('hidden')
        error.classList.remove('hidden')
        }, 0)
        inputs.forEach(input => {
            if(input.value === ''){
                input.classList.add('error-input')
            }
        });
    }
    if (input('password').value !== input('password2').value) {
        e.preventDefault()
        setTimeout(() => {
        avviso.classList.remove('hidden')
        error.classList.remove('hidden')
        }, 0)
        input('password').classList.add('error-input')
        input('password2').classList.add('error-input')
    }
        
})*/

