function getComputerChoice() {
  const RNG = Math.random();

  if (RNG < 1 / 3) {
    return "Rock";
  } else if (RNG >= 1 / 3 && RNG < 2 / 3) {
    return "Paper";
  } else if (RNG >= 2 / 3) {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  computerSelection.toLowerCase();
  return `You lose! Paper Beats Rock`;
}

const RPS_rules = {
  Rock: { Scissors: true },
  Paper: { Rock: true },
  Scissors: { Paper: true },
};

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log();

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}
