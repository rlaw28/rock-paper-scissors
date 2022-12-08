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
  let computerArray = ["Rock", "Paper", "Scissors"];
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
    else if (player == "Rock" && computer == "Scissors") {
      playerPoints += 1
    }
    else if (player == "Paper" && computer == "Rock") {
      playerPoints += 1
    }
    else if (player == "Scissors" && computer == "Paper") {
      playerPoints += 1
  }
    else if (computer == "Rock" && player == "Scissors") {
      computerPoints += 1
    }
    else if (computer == "Paper" && player== "Rock") {
      computerPoints += 1
    }
    else if (computer == "Scissors" && player == "Paper") {
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






 