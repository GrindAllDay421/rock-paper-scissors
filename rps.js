function computerPlay() {
  const rockPaperScissors = ['ROCK', 'PAPER', 'SCISSORS']
  let randomChoice = Math.floor(Math.random() * 3);
 
  return rockPaperScissors[randomChoice];
}

function playRound(playerSelection, computerSelection) {

  switch(playerSelection) {
    case 'ROCK':
      if(computerSelection == 'ROCK') {
        return "Tie!";
      } else if(computerSelection == 'PAPER') {
        return "Lose!";
      } else if(computerSelection == 'SCISSORS') {
        return "Win!";
      };
    case 'PAPER':
      if(computerSelection == 'ROCK') {
        return "Win!";
      } else if(computerSelection == 'SCISSORS') {
        return "Lose!";
      } else if(computerSelection == 'PAPER') {
        return "Tie!";
      };
    case 'SCISSORS':
      if(computerSelection == 'PAPER') {
        return "Win!";
      } else if(computerSelection == 'ROCK') {
        return "Lose!";
      } else if(computerSelection == 'SCISSORS') {
        return "Tie!";
      }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  let paperBtn = document.createElement('button');
  let paperTxt = document.createTextNode('Paper');
  paperBtn.id = 'PAPER';
  paperBtn.appendChild(paperTxt);

  let rockBtn = document.createElement('button');
  let rockTxt = document.createTextNode('Rock');
  rockBtn.id = 'ROCK';
  rockBtn.appendChild(rockTxt);

  let scissorsBtn = document.createElement('button');
  let scissorsTxt = document.createTextNode('Scissors');
  scissorsBtn.id = 'SCISSORS';
  scissorsBtn.appendChild(scissorsTxt);

  document.body.appendChild(paperBtn);
  document.body.appendChild(rockBtn);
  document.body.appendChild(scissorsBtn);

  let scoreboard = document.createElement('div');
  document.body.appendChild(scoreboard);

  const outcome = function(choice) {
      console.log(this.id);
      let result = playRound(this.id, computerPlay());
      if(result === 'Win!') {
        playerScore += 1;
      } else if(result === 'Lose!') {
        computerScore += 1;
      }
      scoreboard.appendChild(document.createTextNode('Player score: ' + playerScore + ' '));
      scoreboard.appendChild(document.createTextNode('Computer score: ' + computerScore));
      scoreboard.appendChild(document.createElement('br'));
  
      if(playerScore === 5 || computerScore === 5) {
        playerScore === 5 ? 
          scoreboard.appendChild(document.createTextNode('You beat the computer!')) :
          scoreboard.appendChild(document.createTextNode('You lost to the computer!!!'));

          paperBtn.removeEventListener('click', outcome);
          rockBtn.removeEventListener('click', outcome);
          scissorsBtn.removeEventListener('click', outcome);
      }
  }

  paperBtn.addEventListener('click', outcome);

  rockBtn.addEventListener('click', outcome);

  scissorsBtn.addEventListener('click', outcome);
}

game();