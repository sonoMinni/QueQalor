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
const users = [
    {usernam: 'admin', password: 'admin', id: 123456789},
    {username: 'admin2', password: 'admin2', id : 987654321}
]

function login(){
    let username = document.getElementsByTagName('email')[0].value
    let password = document.getElementsByTagName('pw')[0].value
    let id = document.getElementsByTagName('id')[0].value


    var user = users.find(user => {
        return user.username === username && user.password === password && user.id === id;
    });
    if(user){
        window.location.href = 'skels/dashboard.html'
    }else{
        alert('wrong credentials')
    }
}
let btn = document.querySelector('.btn')
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
})
