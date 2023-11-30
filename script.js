const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
  const buttons = document.querySelectorAll("button");

  return buttons.forEach((button) => {
    button.addEventListener("click", () => {
      return button.id;
    });
  });
}

function resetScore() {
  // Reset the scores
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore.toString();
  computerScoreDisplay.textContent = computerScore.toString();

  // Send an alert saying the scores have been reset
  alert("The scores have been reset!");
}

function playRound() {
  const computerSelection = computerPlay();

  switch (computerSelection) {
    case "rock":
      if (playerChoice() === "rock") {
        alert("It's a tie!");
      } else if (playerChoice() === "paper") {
        alert("You win! Paper beats rock.");
        playerScore++;
      } else {
        alert("You lose! Rock beats scissors.");
        computerScore++;
      }
      break;
    case "paper":
      if (playerChoice() === "rock") {
        alert("You lose! Paper beats rock.");
        computerScore++;
      } else if (playerChoice() === "paper") {
        alert("It's a tie!");
      } else {
        alert("You win! Scissors beats paper.");
        playerScore++;
      }
      break;
    case "scissors":
      if (playerChoice() === "rock") {
        alert("You lose! Rock beats scissors.");
        playerScore++;
      } else if (playerChoice() === "paper") {
        alert("You win! Scissors beats paper.");
        computerScore++;
      } else {
        alert("It's a tie!");
      }
      break;
  }

  // Update the HTML elements with the new scores
  playerScoreDisplay.textContent = playerScore.toString();
  computerScoreDisplay.textContent = computerScore.toString();
}
