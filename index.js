function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}
const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');

let duel = document.getElementById('duel');

let userScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');
function userPlay(userValue) {
  let computerChoice = computerPlay();
  console.log('user', userValue);
  console.log('computer', computerChoice);
  if (userValue === 'paper') {
    switch (computerChoice) {
      case 'rock':
        duel.innerText = `You choosed ${userValue} and the computer choosed ${computerChoice},you win`;
        userScore.innerText = parseInt(userScore.innerText) + 1;
        break;
      case 'scissors':
        duel.innerText = `You choosed ${userValue} and the computer choosed ${computerChoice},you loose`;
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
        break;
      default:
        duel.innerText = `You choosed ${userValue} and the computer choosed the same thing,it is a draw`;
        break;
    }
  } else if (userValue === 'rock') {
    switch (computerChoice) {
      case 'paper':
        duel.innerText = `You choosed ${userValue} and the computer choosed ${computerChoice},you lose`;
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
        break;
      case 'scissors':
        duel.innerText = `You choosed ${userValue} and the computer choosed ${computerChoice},you win`;
        userScore.innerText = parseInt(userScore.innerText) + 1;
        break;
      default:
        duel.innerText = `You choosed ${userValue} and the computer choosed the same thing,it is a draw`;
        break;
    }
  } else if (userValue === 'scissors') {
    switch (computerChoice) {
      case 'rock':
        duel.innerText = `You choosed ${userValue} and the computer choosed ${computerChoice},you lose`;
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
        break;
      case 'paper':
        duel.innerText = `You choosed ${userValue} and the computer choosed ${computerChoice},you win`;
        userScore.innerText = parseInt(userScore.innerText) + 1;
        break;
      default:
        duel.innerText = `You choosed ${userValue} and the computer choosed the same thing,it is a draw`;
        break;
    }
  }
}
