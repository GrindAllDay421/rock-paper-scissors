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
  
  if(playerSelection == computerSelection) {
    return 0;
  } else if(playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
    return 1;
  } else if(playerSelection == 'PAPER' && computerSelection == 'ROCK') {
    return 1;
  } else if(playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
    return 1;
  } else {
    return 2;
  }
  if(currentRound == 0) {
    return "You Tied!";
  } else if(currentRound == 1) {
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  } else if (currentRound == 2) {
    return `You Lose! ${computerChoice} beats ${playerChoice}`;
  }
}

function game() {
  let wins = 0;
  let losses = 0;
  let ties = 0;
  
  for(let x = 0; x < 5; x++) {
    let playerChoice = playerMove();
    let computerChoice = computerPlay();
    let currentRound = playRound(playerChoice, computerChoice);
    
    switch(currentRound) {
      case 0:
        ties++;
        break;
      case 1:
        wins++;
        break;
      case 2:
        losses++;
        break;
      default:
        break;
    }
    
    console.log(currentRound);
    console.log(wins);
    console.log(losses);
    console.log(ties);
  }
  if(wins == losses) {
    return "You tied!";
  } else if(wins > losses) {
    return "You won!";
  }
}

game();