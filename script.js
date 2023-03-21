let playerScore = 0
let computerScore = 0
const playerChoice = document.querySelectorAll('button')
const computerScore_span = document.getElementById('computer-score')
const playerScore_span = document.getElementById('human-score')

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function disableOptions() {
  playerChoice.forEach(elem => {
      elem.disabled = true
  })
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice()
  computerScore_span.innerHTML = computerScore
  playerScore_span.innerHTML = playerScore
  let result = ""

  if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore++
        result = ("Outsmarting computer... wow. It's a win!")

        if (playerScore == 5) {
            result += '<br>Computers defeated. You won the game, champ! Reload the page to play again'
            disableOptions()
        }
    } else if (playerSelection == computerSelection) {
        result = ("Nice try, but it's a tie! You both chose " + playerSelection)
    } else {
        computerScore++
        result = ("You lose. Reject humanity, enhance computersity!")

          if (computerScore == 5) {
            result += '<br>Hahah, stupid human! I won the game! Reload the page to play again'
            disableOptions()
        }
    }
    document.getElementById('result').innerHTML = result
    return
}

playerChoice.forEach(choice =>{
  choice.addEventListener('click', function(){
    playRound(choice.value)
  })
})
