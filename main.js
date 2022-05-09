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
    let cpuNumber = randomNumbers(1, 100)
    checkNumbersBeforePush(cpuNumbers, cpuNumber)
}
console.log(cpuNumbers)


//Chiedere all'utente di inserire un numero per 84 volte, se raggiunge la fine allora ha vinto, se invece ha scelto un numero non corretto... ha perso.
let userNumbers = [];
let gameOver = false;
//Finchè l'utente non ha raggiunto quota 84 numeri inseriti e non ha sbagliato, allora si continua a chiedere il numero.
while (gameOver == false) {
    //Finchè l'utente non inserisce esattamente un numero compreso tra 1 e 100 allora gli lo si richiede.
    let userNumber
    while (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        userNumber = Number(prompt("Inserisci il numero tra 1 a 100!"))
        if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
            alert(`Devi inserire un NUMERO DA 1 A 100!`)
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
        //Se l'utente inserisce 84 numeri allora ha vinto!
        if (userNumbers.length == 83) {
            gameOver = true;
            alert(`Wow, hai inserito tutti ${userNumbers.length} numeri consentiti! Hai vinto!!`)
        }
    }
}
console.log(userNumbers)