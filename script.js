function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return "You Lose! Paper beats Rock";
    } else {
      return "You Win! Rock beats Scissors";
    }
  }

  if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return "You Lose! Scissors beats Paper";
    } else {
      return "You Win! Paper beats Rock";
    }
  }

  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return "You Lose! Rock beats Scissors";
    } else {
      return "You Win! Scissors beats Paper";
    }
  }
}


function game() {
  let playerScore = 0;
  let computerScore = 0;
  playRound();

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You won the game! Your score was ${playerScore} and the computer's score was ${computerScore}.`);
  } else if (playerScore < computerScore) {
    console.log(`You lost the game! Your score was ${playerScore} and the computer's score was ${computerScore}.`);
  } else {
    console.log(`The game was a tie! Your score was ${playerScore} and the computer's score was ${computerScore}.`);
  }
}