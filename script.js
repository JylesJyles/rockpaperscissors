// ROCK PAPER SCISSORS GAME
//getComputerChoice randomly from the 3 options Rock, Paper & Scissors.
let getComputerChoice = Math.floor(Math.random() * 3);
console.log(getComputerChoice);

function computerSelection() {
    if (getComputerChoice === 0) {
        return getComputerChoice = 'ROCK';
    } else if (getComputerChoice === 1) {
        return getComputerChoice = 'SCISSORS';
    } else {
        return getComputerChoice = 'PAPER';
    }
}

console.log(computerSelection());
// getUserChoice from a predefined list of Rock, Paper & Scissors
// Check if player option beats the computer option
// Return the result