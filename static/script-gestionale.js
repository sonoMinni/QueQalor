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
    {username: 'admin', password: 'admin', id: 123456789},
    {username: 'admin2', password: 'admin2', id : 987654321}
]

function login(){
    console.log('sono dentro e dovrei funzionare')
    let username = document.getElementsByName('email')[0].value
    let password = document.getElementsByName('pw')[0].value
    let id = document.getElementsByName('id')[0].value
    var user = users.findIndex(user => {
        //console.log('found',user.id == id)
        return user.username == username && user.password == password && user.id == id;
    });

    if(users[user].id){
        console.log('dovrei cambiare pagina', users[user])
        window.location.replace('http://127.0.0.1:5500/skels/dashboard.html')
    }else{
        alert('wrong credentials')
    }
}

let btn = document.querySelector('.btn')
btn.addEventListener('click', (e) => {
    
    let avviso = document.querySelector('.error>span')
    let error= document.querySelector('.error')
    if (!checkInput()) {
        console.log('non è entrata nella funzione login');
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
    }else{
        console.log('è entrata nella funzione login');
        login()
    }
})
