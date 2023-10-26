function getComputerChoice() {
    return ["Rock", "Paper", "Scissors"][parseInt(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock"
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors"
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock"
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper"
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors"
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper"
    }
    if (playerSelection == computerSelection) {
        return "It's a draw!"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose your move (Rock, Paper, or Scissors)")
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        if (result.slice(0, 7) == "You Win") {
            playerScore++;
        }
        if (result.slice(0, 8) == "You Lose") {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You are the winner!")
    }
    if (playerScore < computerScore) {
        console.log("The winner is the computer!")
    }
    if (playerScore == computerScore) {
        console.log("There is no winner; it's a draw!")
    }
}

game();