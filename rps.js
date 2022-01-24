function computerPlay() {
  const rockPaperScissors = ['ROCK', 'PAPER', 'SCISSORS']
  let randomChoice = Math.floor(Math.random() * 3);
 
  return rockPaperScissors[randomChoice];
}

function playerMove() {
  let move = window.prompt('ROCK, PAPER, OR SCISSORS');
  return move.toUpperCase();
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
  let wins = 0;
  let losses = 0;

  for(let i = 0; i < 5; i++) {
    let currentRound = playRound(playerMove(), computerPlay());
    console.log(currentRound);
    if(currentRound == "Win!") {
      wins += 1;
    } else if(currentRound == "Lose!") {
      losses += 1;
    }
  }
  if(wins > losses) {
    console.log('You beat the computer!');
  } else if(losses > wins) {
    console.log('The computer beat you!');
  } else {
    console.log('You tied with the computer!');
  }

}

game();