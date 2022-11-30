let compChoice = ["rock", "paper", "scissors"]

function getComputerChoice() {
  choice = compChoice[Math.floor(Math.random() * compChoice.length)]
    return choice;
};


  
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
    
};  


  const rock = document.querySelector('.rock');
  rock.addEventListener('click', () => {
    playerSelection = 'rock';
    console.log(playerSelection);
  });
  
  const paper = document.querySelector('.paper');
  paper.addEventListener('click', () => {
    playerSelection = 'paper';
  });

  const scissors = document.querySelector('.scissors');
  scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
  });




function game() { 
  let computerSelection = getComputerChoice();
  let playerSelection = [rock, paper, scissors];
  playRound(playerSelection, computerSelection);
};
  
const result = document.querySelector('.results');
result.innerText;
 