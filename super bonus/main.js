//--------------------
//  FUNCTIONS
//--------------------
//Funzione per creare un numero random
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//Funzione per aggiungere un elemento ad un array solamente se questo non è già presente all'interno dell'array
function checkNumbersBeforePush(array, number) {
    if (!array.includes(number)) {
        array.push(number)
    }
}

//Funzione per la creazione delle caselle a seconda della difficolta
function boxesCreation(numberOfBoxes) {
    box.classList.add("box", `box${numberOfBoxes}`)
    for (let i = 1; i < numberOfBoxes + 1; i++)
    {
        box.innerHTML = `${i}`;
        rowGame.append(box.cloneNode(true))

    }
}

//--------------------
//  MAIN
//--------------------
//costanti per elementi del DOM
const easy = document.getElementById("facile")
const medium = document.getElementById("media")
const hard = document.getElementById("difficile")
const startGame = document.getElementById("start-game")
const mainRow = document.getElementsByClassName("main-row")
const rowScore = document.getElementsByClassName("row-score") [0]
const rowGame = document.getElementsByClassName("row-game") [0]
const box = document.createElement("div")
let userDifficultyChoice

//Click dei tasti per la difficoltà
easy.addEventListener (`click`,
    function() {
        easy.classList.add("pressed")
        medium.classList.remove("pressed")
        hard.classList.remove("pressed")
        startGame.classList.add("block")
        userDifficultyChoice = 100;
    }
)
medium.addEventListener (`click`, 
    function() {
        easy.classList.remove("pressed")
        medium.classList.add("pressed")
        hard.classList.remove("pressed")
        startGame.classList.add("block")
        userDifficultyChoice = 80;
    }
)
hard.addEventListener (`click`, 
    function() {
        easy.classList.remove("pressed")
        medium.classList.remove("pressed")
        hard.classList.add("pressed")
        startGame.classList.add("block")
        userDifficultyChoice = 50;
    }
)

//Click per startare la partita
startGame.addEventListener (`click`,
    function() {
        for (let i = 0; i < mainRow.length; i++)
        {
            mainRow[i].classList.add("none")
        }
        rowGame.classList.add("block")
        rowScore.classList.add("block")
        startGame.classList.remove("block")
        if (userDifficultyChoice == 100) {
            boxesCreation(100)
            //Il computer generare 16 numeri casuali compresi da 1 a 100 e a seconda del numero scelto la casella corrispondente sarà la bomba
            let cpuNumbers = [];
            while (cpuNumbers.length < 16) {
                let cpuNumber = randomNumbers(1, userDifficultyChoice)
                checkNumbersBeforePush(cpuNumbers, cpuNumber)
            }
            //Per ogni box si prende il suo valore all'interno e per ogni elemento dell'array contenente i numeri del computer si controlla se sono uguali
            for (let i = 0; i < userDifficultyChoice; i++) {
                let box = document.getElementsByClassName("box")
                let numberBox = Number(box[i].innerHTML)
                console.log(numberBox)
                for (let i = 0; i < 16; i++) {
                    let cpuNumber = cpuNumbers[i].innerHTML
                    if (cpuNumbers[i] == numberBox) {
                        box[i].classList.add("red")
                    }
                }
            }
            console.log(cpuNumbers)
        }
        if (userDifficultyChoice == 80) {
            boxesCreation(80)
            //Il computer generare 16 numeri casuali compresi da 1 a 80 e a seconda del numero scelto la casella corrispondente sarà la bomba
            let cpuNumbers = [];
            while (cpuNumbers.length < 16) {
                let cpuNumber = randomNumbers(1, userDifficultyChoice)
                checkNumbersBeforePush(cpuNumbers, cpuNumber)
            }
            console.log(cpuNumbers)
        }
        if (userDifficultyChoice == 50) {
            boxesCreation(50)
            //Il computer generare 16 numeri casuali compresi da 1 a 50 e a seconda del numero scelto la casella corrispondente sarà la bomba
            let cpuNumbers = [];
            while (cpuNumbers.length < 16) {
                let cpuNumber = randomNumbers(1, userDifficultyChoice)
                checkNumbersBeforePush(cpuNumbers, cpuNumber)
            }
            console.log(cpuNumbers)
        }
    }
)

