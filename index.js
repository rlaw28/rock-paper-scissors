const userChoiceDisplay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  getComputerChoice()
  playRound()
}));


function getComputerChoice() {
const compChoice = ["rock", "paper", "scissors"]
const computerChoice = compChoice[Math.floor(Math.random() * compChoice.length)]
  
computerChoiceDisplay.innerHTML = computerChoice
};


function playRound() {
  if (computerChoice === userChoice) {
    result = 'Its a draw.'
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'You Win!'
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'You Lost!'
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'You Win!'
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'You Lost!'
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'You Win!'
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'You Lost!'
  }
  resultDisplay.innerHTML = result
}
//   if (userChoice === computerChoice) {
//     result = "Its a draw."
//   }
//  if (userChoice === "rock" && computerChoice === "scissors") {
//    result = "You Win! Rock beats Scissors."
//   }
//   if (userChoice === "scissors" && computerChoice === "rock") {
//     result = "You Lose, Rock beats Scissors."
//   }
//   if (userChoice === "paper" && computerChoice === "rock") {
//     result = "You Win! Paper beats Rock."
//   }
//    if (userChoice === "rock" && computerChoice === "paper") {
//    result = "You Lose, Paper beats Rock."
//   }
//    if (userChoice === "scissors" && computerChoice === "paper") {
//     result = "You Win! Scissors beats Paper."
//   }
//    if (userChoice === "paper" && computerChoice === "scissors") {
//     result = "You Lose, Scissors beats Paper"
//    }
 








  






 