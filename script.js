const RPS_rules = {
  rock: {
    scissors: true,
    lizard: true,
  },
  paper: {
    rock: true,
    spock: true,
  },
  scissors: {
    paper: true,
    lizard: true,
  },
  lizard: {
    spock: true,
    paper: true,
  },
  spock: {
    rock: true,
    scissors: true,
  },
};

let playerWins = 0;
let computerWins = 0;
let gameRunning = true;

//Gets all possible moves of RPS//
const movesArray = Object.keys(RPS_rules);

const bothPlayerMoves = document.querySelector(".both-player-moves");
const moveHeader = document.querySelector(".moves-header");
const playerRoundsWon = document.querySelector(".player-win-count");
const computerRoundsWon = document.querySelector(".computer-win-count");

function getComputerChoice() {
  const moveRNG = Math.floor(Math.random() * movesArray.length);

  return movesArray[moveRNG];
}

function checkWinner() {
  if (playerWins === 5) {
    moveHeader.textContent = "You won the game!";
    gameRunning = false;
  } else if (computerWins === 5) {
    moveHeader.textContent = "The computer won.";
    gameRunning = false;
  }
}

function playRound(playerMove) {
  if (!gameRunning) return;

  let compMove = getComputerChoice();

  if (playerMove === compMove) {
    console.log(`It was a tie since you both picked ${playerMove}`);
    return;
  }

  if (RPS_rules[playerMove][compMove]) {
    bothPlayerMoves.textContent = `You picked ${playerMove}, the computer picked ${compMove}.`;
    playerWins++;
    playerRoundsWon.textContent = `Player wins: ${playerWins}`;
    checkWinner();
  } else {
    bothPlayerMoves.textContent = `You picked ${playerMove}, the computer picked ${compMove}. You lost.`;
    computerWins++;
    computerRoundsWon.textContent = `Computer wins: ${computerWins}`;
    checkWinner();
  }
}

//bind() method allows us to pass parameters to callback functions that have them.
movesArray.forEach((move) => {
  const moveButton = document.querySelector(`#${move}`);
  moveButton.addEventListener("click", playRound.bind(null, `${move}`));
});
