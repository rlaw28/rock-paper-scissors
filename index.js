 const compChoice = ["Rock" , "Paper", "Scissors"]

function getComputerChoice() {
  choice = compChoice[Math.floor(Math.random() * compChoice.length)]
    console.log(choice);
}