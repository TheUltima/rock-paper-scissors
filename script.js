function getComputerChoice() {
  const RNG = Math.random();

  if (RNG > 1 / 3) {
    return "Rock";
  } else if (RNG > 2 / 3) {
    return "Paper";
  } else return "Scissors";
}

console.log(getComputerChoice);
console.log(getComputerChoice);

function playRound(playerSelection, computerSelection) {
  return `You lose! Paper Beats Rock`;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playGame() {
  let roundsPlayed = 0;

  for (let i = 0; i < 5; i++) {
    playRound();
  }
}
