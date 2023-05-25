const arr = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let random = [Math.floor(Math.random() * arr.length)]
    return arr[random]
}

function getPlayerChoice() {
    let input = prompt("Rock, paper or scissors?", "rock").toLowerCase();
    return input
}


function playRound(playerSelection, computerSelection) {
    console.log(playerScore, computerScore)
    if (playerSelection == computerSelection) {
        return `It's a tie! You both picked ${playerSelection}`
    } else if (playerSelection == "rock" && computerSelection == "scissors" || 
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
        return `You win! ${playerSelection} beats ${computerSelection}.`
    } else {
        computerScore++
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice()
        const playerSelection = getPlayerChoice()
        console.log(playRound(playerSelection, computerSelection))
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
