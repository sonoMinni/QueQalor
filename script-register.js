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