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

//--------------------
//  MAIN
//--------------------
//Chiedere all'utente la difficoltà e controllare che inserisca correttamente i numeri
let userDifficultyChoice
while (isNaN(userDifficultyChoice) || userDifficultyChoice < 0 || userDifficultyChoice > 2) {
    userDifficultyChoice = Number(prompt(`Inserisci la difficoltà desiderata dallo 0 (più facile) al 2(più difficile)`))
    //Se l'utente non inserisce correttamente il valore richiesto lo si informa.
    if (isNaN(userDifficultyChoice) || userDifficultyChoice < 0 || userDifficultyChoice > 2) {
        alert(`Devi inserire un NUMERO DA 0 A 2!`)
    }
}
let difficulty = 0;
//Se sceglie 0 allora i numeri casuali saranno 100
if (userDifficultyChoice == 0) {
    difficulty = 100;
//Se sceglie 1 allora i numeri casuali saranno 80
} else if ((userDifficultyChoice == 1)) {
    difficulty = 80;
//Altrimenti avrà scelto 2 e i numeri casuali saranno 50
} else {
    difficulty = 50;
}
//Il computer deve generare 16 numeri casuali compresi da 1 a difficulty (100/80/50)
let cpuNumbers = [];
while (cpuNumbers.length < 16) {
    let cpuNumber = randomNumbers(1, difficulty)
    checkNumbersBeforePush(cpuNumbers, cpuNumber)
}
console.log(cpuNumbers)


//Chiedere all'utente di inserire un numero per (difficulty - 16) volte, se raggiunge la fine allora ha vinto, se invece ha scelto un numero non corretto... ha perso.
let userNumbers = [];
//Variabile per uscire dal ciclo nel caso l'utente vinca o perda.
let gameOver = false;
//Finchè l'utente non ha raggiunto quota (difficulty - 16) numeri inseriti e non ha sbagliato, allora si continua a chiedere il numero.
while (gameOver == false) {
    //Finchè l'utente non inserisce esattamente il valore richiesto si ripete la domanda.
    let userNumber
    while (isNaN(userNumber) || userNumber < 1 || userNumber > difficulty) {
        userNumber = Number(prompt(`Inserisci il numero tra 1 a ${difficulty}!`))
        //Se l'utente non inserisce correttamente il valore richiesto lo si informa.
        if (isNaN(userNumber) || userNumber < 1 || userNumber > difficulty) {
            alert(`Devi inserire un NUMERO DA 1 A ${difficulty}!`)
        }
    }

    //Se il numero inserito è presente all'interno dei numeri del computer allora l'utente ha perso.
    if (cpuNumbers.includes(userNumber) == true) {
        gameOver = true;
        alert(`Mi dispiace, hai perso! Però hai inserito ${userNumbers.length} numeri correttamente!!`)
    //Se invece il numero inserito è stato precedentemente inserito allora non verrà aggiunto tra i numeri validi.
    } else if (userNumbers.includes(userNumber)) {
        alert(`Furbetto, questo numero l'hai già inserito :/`)
    //Se il numero è valido, allora viene inserito all'interno della lista utente.
    } else {
        checkNumbersBeforePush(userNumbers, userNumber)
        //Se l'utente inserisce (difficulty - 16) numeri allora ha vinto!
        if (userNumbers.length == (difficulty - 17)) {
            gameOver = true;
            alert(`Wow, hai inserito tutti ${userNumbers.length} numeri consentiti! Hai vinto!!`)
        }
    }
}
console.log(userNumbers)