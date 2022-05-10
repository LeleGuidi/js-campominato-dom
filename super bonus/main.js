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

//Funzione per attribuire ai box la bomba, a seconda dell'array generato con numeri casuali dal computer
function redBoxes(array){
    for (let i = 0; i < 16; i++) {
        const box = document.getElementsByClassName("box")
        box[array[i]].classList.add("bomb")
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
            redBoxes(cpuNumbers)
           
        }
        if (userDifficultyChoice == 80) {
            boxesCreation(80)
            //Il computer generare 16 numeri casuali compresi da 1 a 80 e a seconda del numero scelto la casella corrispondente sarà la bomba
            let cpuNumbers = [];
            while (cpuNumbers.length < 16) {
                let cpuNumber = randomNumbers(1, userDifficultyChoice)
                checkNumbersBeforePush(cpuNumbers, cpuNumber)
            }
            redBoxes(cpuNumbers)
        }
        if (userDifficultyChoice == 50) {
            boxesCreation(50)
            //Il computer generare 16 numeri casuali compresi da 1 a 50 e a seconda del numero scelto la casella corrispondente sarà la bomba
            let cpuNumbers = [];
            while (cpuNumbers.length < 16) {
                let cpuNumber = randomNumbers(1, userDifficultyChoice)
                checkNumbersBeforePush(cpuNumbers, cpuNumber)
            }
            redBoxes(cpuNumbers)
        }
    }
)
// //L'utente clicca le caselle
// boxElement.addEventListener(`click`,
//     function() {
//         if (box.classList.contains("bomb")) {
//             box.classList.add("red")

//         }
//      }
// )

