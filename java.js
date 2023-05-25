const arr = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let random = [Math.floor(Math.random() * arr.length)]
    return arr[random]
}

function getPlayerChoice() {
    let input = prompt("Rock, paper or scissors?");
    input = input.toLowerCase()
    while (input !== arr) {
        return prompt("Rock, paper, or scissors.")
    }
    return input
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie"
    } else if (playerSelection == "rock" && computerSelection == "scissors" || 
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper") {
        return "Player"
    } else {
        return "Computer"
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    playerSelection = "rock"
    if (checkWinner(playerSelection, computerSelection) == "Tie") {
        return "It's a tie!"
    } else if (checkWinner(playerSelection, computerSelection) == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}.`
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (i = 0; i < 5; i++) {
        computerSelection = getComputerChoice()
        playerSelection = "rock"
        playRound(playerSelection, computerSelection)
        console.log(playRound(playerSelection, computerSelection))
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            playerScore++
        } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            computerScore++
        } else if (checkWinner(playerSelection, computerSelection) == "Tie") {
            playerScore++ && computerScore++
        }
    }
    console.log("Game Over!")
    if (playerScore > computerScore) {
        return "You won."
    } else if (playerScore < computerScore) {
        return "You lost."
    } else if (playerScore == computerScore) {
        return "It's a tie..."
    }
}
