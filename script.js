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
  let playerMove = playerSelection.toLowerCase();
  let compMove = computerSelection.toLowerCase();

  const RPS_rules = {
    rock: { scissors: true },
    paper: { rock: true },
    scissors: { paper: true },
  };

  if (playerMove === compMove) {
    console.log(`It was a tie since you both picked ${playerMove}`);
    return;
  }

  if (RPS_rules[playerMove][compMove]) {
    console.log(
      `You picked ${playerMove}, while the computer picked ${compMove}. You win!!`
    );
  } else {
    console.log(
      `You picked ${playerMove}, while the computer picked ${compMove}. You lose`
    );
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose your move against bot:", "rock");
    playRound(playerSelection, getComputerChoice());
  }
}

playGame();
