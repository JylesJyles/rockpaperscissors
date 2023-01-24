// ROCK PAPER SCISSORS GAME
//getComputerChoice randomly from the 3 options Rock, Paper & Scissors.
let getComputerChoice = Math.floor(Math.random() * 3);
console.log(`Computer random number = ${getComputerChoice}`);

function computerSelection() {
    if (getComputerChoice === 0) {
        return getComputerChoice = 'ROCK';
    } else if (getComputerChoice === 1) {
        return getComputerChoice = 'SCISSORS';
    } else {
        return getComputerChoice = 'PAPER';
    }
}

console.log(`Which converts into equally ${computerSelection()}`);

// define the players selection

let playerSelection = prompt("Rock, Paper or Scissors?");

playerSelection = playerSelection.toUpperCase();
console.log(`Our player types ${playerSelection}`);

// Check if player option beats the computer option

// PAPER beats ROCK
// SCISSORS beats PAPER
// ROCK beats SCISSORS


function playRound(playerSelection, getComputerChoice) {
    if (playerSelection === 'PAPER' && getComputerChoice === 'ROCK') {
        return 'Player wins, as Paper beats Rock.';
    } else if (playerSelection === 'SCISSORS' && getComputerChoice === 'PAPER') {
       return 'Player wins, as Scissors beats Paper.';
    } else if (playerSelection === 'ROCK' && getComputerChoice === 'SCISSORS') {
        return 'Player wins, as Rock beats Scissors.';
    } else if (playerSelection === getComputerChoice) {
        return 'Draw.';
    } else {
        return 'Player loses.'
    }
}

// Return the result

console.log(`Our Player chooses ${playerSelection} and the Computer choose ${getComputerChoice}. ${playRound(playerSelection, getComputerChoice)}`);


//We to make a 5 round game
// Create a loop that lasts for 5 rounds
// Keep player score and computer score
// Declare a winner based off of who has the highest score after 5 rounds
// Restart the game after the 5 rounds has been played