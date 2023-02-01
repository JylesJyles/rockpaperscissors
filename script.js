// ROCK PAPER SCISSORS GAME


// Check if player option beats the computer option

// PAPER beats ROCK
// SCISSORS beats PAPER
// ROCK beats SCISSORS


// Return the result

//We to make a 5 round game
// Create a loop that lasts for 5 rounds
let userScore = 0;
let computerScore = 0;

//getComputerChoice randomly from the 3 options Rock, Paper & Scissors.

let getComputerChoice = '';
function computerSelection() {
        getComputerChoice = Math.floor(Math.random() * 3);
        if (getComputerChoice === 0) {
                return getComputerChoice = 'ROCK';
        } else if (getComputerChoice === 1) {
                return getComputerChoice = 'SCISSORS';
        } else {
                return getComputerChoice = 'PAPER';
        }
    }

        // define the players selection

const btnRock = document.querySelector('.btnRock');
btnRock.addEventListener('click', () => {
    playerSelection = 'ROCK';
    computerSelection()
    playAndDeclareWinner()
});

const btnScis = document.querySelector('.btnScis');
btnScis.addEventListener('click', () => {
    playerSelection = 'SCISSORS';
    computerSelection()
    playAndDeclareWinner()
});

const btnPaper = document.querySelector('.btnPaper');
btnPaper.addEventListener('click', () => {
    playerSelection = 'PAPER';
    computerSelection()
    playAndDeclareWinner()
});

function playRound(playerSelection, getComputerChoice) {
            if (playerSelection === 'PAPER' && getComputerChoice === 'ROCK') {
                return userScore ++;
            } else if (playerSelection === 'SCISSORS' && getComputerChoice === 'PAPER') {
               return userScore ++;
            } else if (playerSelection === 'ROCK' && getComputerChoice === 'SCISSORS') {
                return userScore ++;
            } else if (playerSelection === getComputerChoice) {
                return 'Draw.';
            } else {
                return computerScore ++;
            }
        }

// function declareWinner(userScore, computerScore){
//     if (userScore > computerScore) {
//         return winnerAnnouncement = 'The winner is the User!';
//     } else if (userScore === computerScore) {
//         return winnerAnnouncement = 'This is a draw! You both win :)';
//     } else {
//         return winnerAnnouncement = 'The winner is the Computer.';
//     }
// }

function declareWinner(userScore, computerScore){
        if (userScore === 5) {
            return winnerAnnouncement = 'The winner is the User!';
        } else if (computerScore === 5) {
            return winnerAnnouncement = 'The winner is the computer!';
        } else {
            playRound();
        }
    }

const results = document.querySelector('#results');
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');
const gWinner = document.querySelector('#gWinner');

function playAndDeclareWinner() {
    results.textContent = `Our Player chose ${playerSelection} and the Computer chose ${getComputerChoice}.`;
    playRound(playerSelection, getComputerChoice);
    pScore.textContent = `Player Score = ${userScore}`;
    cScore.textContent = `Computer Score = ${computerScore}`;
    gWinner.textContent = declareWinner(userScore, computerScore);
}
// Keep player score and computer score

// Declare a winner based off of who has the highest score after 5 rounds
// Restart the game after the 5 rounds has been played