//--------------------
//  FUNCTIONS
//--------------------
//Funzione per creare un numero random
function randomNumbers(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

//Funzione per aggiungere un elemento ad un array solamente se questo non è già presente all'interno dell'array
function checkNumbersBeforePush(array, number) {
    if (!array.includes(number)) {
        array.push(number)
    }
}

//Funzione per vedere se un elemento è già presente all'interno della variabile interessata
function isInArray(array, element) {
    let checked = false;
    let i = 0;
    while (checked == false && i <= array.length) {
        if (array[i] == element) {
            let checked = true;
            return checked;
        }
        i++
    }
    return checked;
}