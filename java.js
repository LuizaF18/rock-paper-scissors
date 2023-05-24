const choices = ["rock", "paper", "scissors"]

//computer has to randomly choose between rock or paper or scissors
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return randomItem = choices[randomIndex]
}

//player can choose between rock or paper or scissors

// write a function with two parameters, computer selection and player selection

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    if (computerSelection == "rock" && playerSelection == "scissors") {
       return "You lose! Rock beats scissors.";
      } else if (computerSelection == "rock" && playerSelection == "paper") {
       return "You win! Paper beats rock.";
      } else if (computerSelection == playerSelection) {
       return "It's a tie!";
     } else if (computerSelection == "paper" && playerSelection == "scissors") {
       return "You win! Scissors beats paper.";
        } else if (computerSelection == "paper" && playerSelection == "rock") {
       return "You lose! Paper beats rock.";
       } else if (computerSelection == "scissors" && playerSelection == "paper") {
       return "You lose! Scissors beats paper.";
      } else if (computerSelection == "scissors" && playerSelection == "rock") {
       return "You win! Rock beats scissors.";
      }
}









//if rock and paper, paper wins
//if rock and scissors, rock wins
//if paper and scissors, scissors win
//at the end of choice, return a string that declares the winner of the round
//player inputs string, make string case insensitive
//use prompt to get input from user

//write a game function
//it has to loop for 5 times and keep score of the wins
//use console log to display the results at the end of each round
//if computer gets to 5, computer wins
//if player gets to 5, player wins
//use console log to declare the winner