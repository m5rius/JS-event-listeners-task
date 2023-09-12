let numbers = document.querySelector('#numbers')

let input = document.createElement('input')
input.type ='number'
input.value = 5
input.min = '1'
input.max = '10'
numbers.append(input)

let h3 = document.createElement('h3')
h3.textContent = 5
numbers.append(h3)

let btnSubtract = document.createElement('button')
btnSubtract.textContent ='-'
numbers.append(btnSubtract)

let btnSubtractTwo = document.createElement('button')
btnSubtractTwo.textContent = '-2'
numbers.append (btnSubtractTwo)

let btnReset = document.createElement('button')
btnReset.textContent = 'Reset'
numbers.append(btnReset)

let btnAddTwo = document.createElement('button')
btnAddTwo.textContent = '+2'
numbers.append(btnAddTwo)

let btnAdd = document.createElement('button')
btnAdd.textContent = '+'
numbers.append(btnAdd)

let addPoints = document.createElement('button')
addPoints.textContent = 'Įrašyti balą'
numbers.append(addPoints)

let h4 = document.createElement('h4')
h4.textContent = 'Balai:'
numbers.append(h4)

let list = document.createElement('ul')
numbers.append(list)

btnAdd.addEventListener('click', add)
btnSubtract.addEventListener('click', subtract)
btnReset.addEventListener('click', reset)
btnAddTwo.addEventListener('click', addTwo)
btnSubtractTwo.addEventListener('click', subtractTwo)
addPoints.addEventListener('click', addPointsAction)
// input.addEventListener('input', inputAction)



function color (){
    if (h3.textContent >= 5 ){
        h3.style = `color: green`;
    } else{
        h3.style = `color: red`;
    }
}
color()

function add(){
    h3.textContent++ 
    if (h3.textContent > 9){
        btnAdd.setAttribute('disabled', true)
    }
    if (h3.textContent > 8){
        btnAddTwo.setAttribute('disabled', true)
    }
    if (h3.textContent > 0){
        btnSubtract.removeAttribute('disabled')
    }
    if (h3.textContent > 1){
        btnSubtractTwo.removeAttribute('disabled')
    }
    color()
    input.value = h3.textContent
}



function subtract(){
    h3.textContent--
    if (h3.textContent < 2){
        btnSubtractTwo.setAttribute('disabled', true)
    }
    if (h3.textContent < 1){
        btnSubtract.setAttribute('disabled', true)
    }
    if (h3.textContent < 9){
        btnAddTwo.removeAttribute('disabled')
    }
    if (h3.textContent < 10){
        btnAdd.removeAttribute('disabled')
    }
    color()
    input.value = h3.textContent
}

function reset(){
    h3.textContent = 5
    if (h3.textContent < 10){
        btnAdd.removeAttribute('disabled')
        btnAddTwo.removeAttribute('disabled')
    }
    if (h3.textContent > 1){
        btnSubtract.removeAttribute('disabled')
        btnSubtractTwo.removeAttribute('disabled')
    }
    color()
    input.value = h3.textContent
}

function addTwo(){
    h3.textContent = Number(h3.textContent) + 2
    if (h3.textContent > 9){
        btnAddTwo.setAttribute('disabled', true)
        btnAdd.setAttribute('disabled', true)
    }
    if (h3.textContent > 8){
        btnAddTwo.setAttribute('disabled', true)
    }
    if (h3.textContent > 1){
        btnSubtractTwo.removeAttribute('disabled')
        btnSubtract.removeAttribute('disabled')
    }
    color()
    input.value = h3.textContent
}

function subtractTwo(){
    h3.textContent = Number(h3.textContent) - 2
    if (h3.textContent < 2){
    btnSubtractTwo.setAttribute('disabled', true)
    btnSubtract.setAttribute('disabled', true)
    }
    if (h3.textContent < 10){
        btnAddTwo.removeAttribute('disabled')
        btnAdd.removeAttribute('disabled')
    }
    color()
    input.value = h3.textContent
}

function addPointsAction(){
    let listItem = document.createElement('li')
    listItem.textContent = h3.textContent
    list.append(listItem)
    function colorPoints (){
        if (h3.textContent >= 5 ){
            listItem.style = `color: green`;
        } else{
            listItem.style = `color: red`;
        }
    }
    colorPoints()
    let btnRemove = document.createElement('button')
    btnRemove.textContent = 'X'
    listItem.append(btnRemove)
    btnRemove.addEventListener('click', removePoints)
    function removePoints(){
        listItem.remove('button')
    }

}



