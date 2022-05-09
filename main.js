//--------------------
//  FUNCTIONS
//--------------------
//Funzione per creare un numero random random
function randomNumbers(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}



//--------------------
//  MAIN
//--------------------
//Il computer deve generare 16 numeri casuali compresi da 1 a 100
let cpuNumbers = [];
while (cpuNumbers.length < 16) {
    let number = randomNumbers(1, 100)
    if (!cpuNumbers.includes(number)) {
        cpuNumbers.push(number)
    }
}