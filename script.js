const RPS_rules = {
  rock: { scissors: true },
  paper: { rock: true },
  scissors: { paper: true },
};

function getComputerChoice() {
  //Get all possible moves of RPS//
  const movesArray = Object.keys(RPS_rules);
  const moveRNG = Math.floor(Math.random() * movesArray.length);

  return movesArray[moveRNG];
}

function playRound(playerSelection, computerSelection) {
  let playerMove = playerSelection.toLowerCase();
  let compMove = computerSelection.toLowerCase();

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
    const playerSelection = prompt("Choose your move against bot:", "Rock");
    playRound(playerSelection, getComputerChoice());
  }
}
