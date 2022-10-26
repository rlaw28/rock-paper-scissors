 const compChoice = ["Rock" , "Paper", "Scissors"]

function getComputerChoice() {
  choice = compChoice[Math.floor(Math.random() * compChoice.length)]
    return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "You Win! Rock beats Scissors.";
  }
  else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return "You Lose, Rock beats Scissors.";
  }
  else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "You Win! Paper beats Rock."
  }
  else if (playerSelection == "Rock" && computerSelection == "Paper") {
    return "You Lose, Paper beats Rock."
  }
  else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "You Win! Scissors beats Paper."
  }
  else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return "You Lose, Scissors beats Paper"
  }
  else {
    return "It's a Tie!"
    }
}   
const playerSelection = "Scissors";
const computerSelection = getComputerChoice();
const results = playRound();

function game() { 
  playRound(results){
    for (let i = 0; i < 5; i++){
      console.log(results);
    }
  }
}
 

