const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const playerPointsText = document.getElementById('playerPoints');
const computerPointsText = document.getElementById('computerPoints');
const choiceBtns = document.querySelectorAll(".choiceBtn");
const newGameBtn = document.querySelector(".newGame");
let player;
let computer;
let result
let playerPoints = 0;
let computerPoints = 0;


choiceBtns.forEach(button => button.addEventListener('click', () => {
  player = button.textContent
  getComputerChoice();
  playerText.innerHTML = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = gameResult();
  playerPointsText.textContent = `Your points: ${playerPoints}`;
  computerPointsText.textContent = `Computer points: ${ computerPoints }`;

}));


function getComputerChoice() {
  let computerArray = ["rock", "paper", "scissors"];
  computer = computerArray[Math.floor(Math.random() * computerArray.length)];
};

function gameResult() {
  if (player == computer) {
      playerPoints;
      computerPoints;
    }
  if (playerPoints == 5) {
    return "You Win!"
    }
  if (computerPoints == 5) {
    return "You Lost!"
  }
    else if (player == "rock" && computer == "scissors") {
      playerPoints += 1
    }
    else if (player == "paper" && computer == "rock") {
      playerPoints += 1
    }
    else if (player == "scissors" && computer == "paper") {
      playerPoints += 1
  }
    else if (computer == "rock" && player == "scissors") {
      computerPoints += 1
    }
    else if (computer == "paper" && player== "rock") {
      computerPoints += 1
    }
    else if (computer == "scissors" && player == "paper") {
      computerPoints += 1
    }
};



newGameBtn.addEventListener('click', () => {
  playerText.innerHTML = "Player:";
  computerText.textContent = "Computer:";
  resultText.textContent = ''
  playerPoints = 0;
  computerPoints = 0;
  playerPointsText.textContent = `Your points: ${playerPoints}`;
  computerPointsText.textContent = `Computer points: ${ computerPoints }`;
});






 