//Il computer deve generare 16 numeri casuali compresi da 1 a 100
let cpuNumbers = [];
while (cpuNumbers.length < 16) {
    let number = Math.floor(Math.random() * 100) + 1;
    if (!cpuNumbers.includes(number)) {
        cpuNumbers.push(number)
    }
}