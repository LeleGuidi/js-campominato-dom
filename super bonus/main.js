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
//Click dei tasti per la difficoltà
easy.addEventListener (`click`,
    function() {
        easy.classList.add("pressed")
        medium.classList.remove("pressed")
        hard.classList.remove("pressed")
        startGame.classList.add("block")
        userDifficultyChoice = 1;
    }
)
medium.addEventListener (`click`, 
    function() {
        easy.classList.remove("pressed")
        medium.classList.add("pressed")
        hard.classList.remove("pressed")
        startGame.classList.add("block")
        userDifficultyChoice = 2;
    }
)
hard.addEventListener (`click`, 
    function() {
        easy.classList.remove("pressed")
        medium.classList.remove("pressed")
        hard.classList.add("pressed")
        startGame.classList.add("block")
        userDifficultyChoice = 3;
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
        if (userDifficultyChoice == 1) {
            box.classList.add("box", "box100")
            for (let i = 1; i < 101; i++)
            {
                box.innerHTML = `${i}`;
                rowGame.append(box.cloneNode(true))

            }
        }
        if (userDifficultyChoice == 2) {
            box.classList.add("box", "box80")
            for (let i = 1; i < 81; i++)
            {
                box.innerHTML = `${i}`;
                rowGame.append(box.cloneNode(true))

            }
        }
        if (userDifficultyChoice == 3) {
            box.classList.add("box", "box50")
            for (let i = 1; i < 51; i++)
            {
                box.innerHTML = `${i}`;
                rowGame.append(box.cloneNode(true))

            }
        }
    }
)
