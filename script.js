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

function getComputerChoice() {
  //Get all possible moves of RPS//
  const movesArray = Object.keys(RPS_rules);
  const moveRNG = Math.floor(Math.random() * movesArray.length);

  return movesArray[moveRNG];
}

function playRound(playerSelection) {
  let playerMove = playerSelection;
  let compMove = getComputerChoice();
  console.log(playerMove);

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

const rock = document.querySelector("#rock");
rock.addEventListener("click", playRound.bind(null, "rock"));

const paper = document.querySelector("#paper");

const scissors = document.querySelector("#scissors");

const lizard = document.querySelector("#lizard");

const spock = document.querySelector("#spock");
