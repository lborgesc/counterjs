const counter = document.querySelector('span');
const btnReset = document.querySelector('.reset')
const btnIncrease = document.querySelector('.increase')
const btnDecrease = document.querySelector('.decrease')



btnIncrease.addEventListener('click', increaseNumber)
btnDecrease.addEventListener('click', decreaseNumber)
btnReset.addEventListener('click', resetNumber)


function increaseNumber() {
    counter.innerText++
    colorNumber()
}

function decreaseNumber() {
    counter.innerText--
    colorNumber()
}

function resetNumber() {
    counter.innerText = 0
    colorNumber()
}


function colorNumber() {
    if (counter.innerText > 0) counter.style.color = "green"

    if (counter.innerText < 0) 
        counter.style.color = "red";
    
    if (counter.innerText == 0) 
        counter.style.color = "#222";
}