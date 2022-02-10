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
  let wins = 0;
  let losses = 0;

  let paperBtn = document.createElement('button');
  let paperTxt = document.createTextNode('Paper');
  paperBtn.appendChild(paperTxt);

  let rockBtn = document.createElement('button');
  let rockTxt = document.createTextNode('Rock');
  rockBtn.appendChild(rockTxt);

  let scissorsBtn = document.createElement('button');
  let scissorsTxt = document.createTextNode('Scissors');
  scissorsBtn.appendChild(scissorsTxt);

  document.body.appendChild(paperBtn);
  document.body.appendChild(rockBtn);
  document.body.appendChild(scissorsBtn);

  paperBtn.addEventListener('click', playRound('PAPER', computerPlay()));
  rockBtn.addEventListener('click', playRound('ROCK', computerPlay()));
  scissorBtn.addEventListener('click', playRound('SCISSORS', computerPlay()));

  if(wins > losses) {
    console.log('You beat the computer!');
  } else if(losses > wins) {
    console.log('The computer beat you!');
  } else {
    console.log('You tied with the computer!');
  }

  let scoreboard = document.createElement('div');

}

game();