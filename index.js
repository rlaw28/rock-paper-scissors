const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const userPointsDisplay = document.getElementById('user-points');
const computerPointsDisplay = document.getElementById('computer-points');
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result
let userPoints = 0;
let computerPoints = 0;


choiceBtns.forEach(button => button.addEventListener('click', () => {
  player = button.textContent
  getComputerChoice();
  playerText.innerHTML = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = gameResult();
}));


function getComputerChoice() {
  let computerArray = ["rock", "paper", "scissors"];
  computer = computerArray[Math.floor(Math.random() * computerArray.length)];
};

function gameResult() {
  if (player == computer) {
    return "Tie";
  }
  else if (computer == "rock") {
    return (player == "paper") ? "You Win!" : "You Lose!"
  }
  else if (computer == "paper") {
    return (player == "scissors") ? "You Win!" : "You Lose!"
  }
  else if (computer == "scissors") {
    return (player == "rock") ? "You Win!" : "You Lose!"
  }
};












  






 