let numbers = document.querySelector('#numbers')

let h3 = document.createElement('h3')
h3.textContent = 5
numbers.append(h3)

let btnAdd = document.createElement('button')
btnAdd.textContent = '+'
numbers.append(btnAdd)

let btnSubtract = document.createElement('button')
btnSubtract.textContent ='-'
numbers.append(btnSubtract)

btnAdd.addEventListener('click', add)

btnSubtract.addEventListener('click', subtract)

function add(){
    h3.textContent++
    if (h3.textContent > 9){
        btnAdd.setAttribute('disabled', true)
    }
    if (h3.textContent > 1){
        btnSubtract.removeAttribute('disabled')
    }
}

function subtract(){
    h3.textContent--
    if (h3.textContent < 2){
        btnSubtract.setAttribute('disabled', true)
    }
    if (h3.textContent < 10){
        btnAdd.removeAttribute('disabled')
    }
}