let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
let resultDisplay = document.querySelector('.result');
const btns = document.querySelectorAll('button');

function getComputerChoice() {
    return ["rock", "paper", "scissors"][parseInt(Math.random()*3)];
}

function showWinner() {
    if (playerScore.innerHTML > computerScore.innerHTML) {
        resultDisplay.innerHTML = "You are the winner!";
    }
    if (playerScore.innerHTML < computerScore.innerHTML) {
        resultDisplay.innerHTML = "The winner is the computer!";
    }
}

function endGame() {
    btns.forEach(btn => btn.removeEventListener('click', playRound));
}

function playRound(event) {
    event.stopPropagation();
    let playerSelection = event.target.classList.item(0);
    let computerSelection = getComputerChoice();

    if (playerSelection == "rock" && computerSelection == "paper") {
        resultDisplay.innerHTML = "You Lose! Paper beats Rock";
        computerScore.innerHTML = Number(computerScore.innerHTML) + 1;
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        resultDisplay.innerHTML = "You Win! Rock beats Scissors";
        playerScore.innerHTML = Number(playerScore.innerHTML) + 1;
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        resultDisplay.innerHTML = "You Win! Paper beats Rock";
        playerScore.innerHTML = Number(playerScore.innerHTML) + 1;
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        resultDisplay.innerHTML = "You Lose! Scissors beats Paper";
        computerScore.innerHTML = Number(computerScore.innerHTML) + 1;
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        resultDisplay.innerHTML = "You Lose! Rock beats Scissors";
        computerScore.innerHTML = Number(computerScore.innerHTML) + 1;
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        resultDisplay.innerHTML = "You Win! Scissors beats Paper";
        playerScore.innerHTML = Number(playerScore.innerHTML) + 1;
    }
    if (playerSelection == computerSelection) {
        resultDisplay.innerHTML = "It's a draw!";
    }

    let round = document.querySelector('.round');
    round.innerHTML = Number(round.innerHTML) + 1;
    
    if (playerScore.innerHTML >= 5 || computerScore.innerHTML >= 5) {
        showWinner();
        endGame();
    }
}

btns.forEach(btn => btn.addEventListener('click', playRound));