//--------------------
//  FUNCTIONS
//--------------------
//Funzione per creare un numero random random
function randomNumbers(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

function checkNumbersBeforePush(array, number) {
    if (!array.includes(number)) {
        array.push(number)
    }
}



//--------------------
//  MAIN
//--------------------
//Il computer deve generare 16 numeri casuali compresi da 1 a 100
let cpuNumbers = [];
while (cpuNumbers.length < 16) {
    let number = randomNumbers(1, 100)
    checkNumbersBeforePush(cpuNumbers, number)
}

//Chiedere all'utente di inserire un numero per 84 volte, se raggiunge la fine allora ha vinto.