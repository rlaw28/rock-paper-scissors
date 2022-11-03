 let compChoice = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
  choice = compChoice[Math.floor(Math.random() * compChoice.length)]
    return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection ){
    return "It's a Tie!";
    }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors.";
  }
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose, Rock beats Scissors.";
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock.";
  }
  else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose, Paper beats Rock.";
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper.";
  }
  else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose, Scissors beats Paper";
  }
    
}   



function game() { 
  for (let i = 0; i < 5; i++){
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();
    console.log(playRound(playerSelection, computerSelection), i);
  }
}
  
 

