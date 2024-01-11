//!vender var
const startGameBtn = document.getElementById("start-game-btn");
//global var
let gameIsRunnig = false;
const ROCK = "ROCK";
const PAPER = "PAPER";
const SISERS = "SISERS";
//defult var
const DEFALT_USER_CHOIS = ROCK;
//game result var
const RESULT_DROW = "DROW";
const RESULT_COMPUTER_WIN = "COMPUTER_WIN";
const RESULT_PLAYER_WIN = "PLAYER_WIN";

//geting user input
const getPlayerChoise = () => {
  const selection = prompt(`${ROCK} , ${PAPER} or ${SISERS}`).toUpperCase();
  // cheak the validation of value
  if (selection !== ROCK && selection !== PAPER && selection !== SISERS) {
    selection = DEFALT_USER_CHOIS;
  }
  return selection;
};

// make computer choise using random
const getCamputerChois = () => {
  const randomValue = Math.random();
  if (randomValue <= 0.35) {
    return SISERS;
  } else if (randomValue <= 0.67) {
    return ROCK;
  } else {
    return PAPER;
  }
};

// finde a winner for the game
const getWinner = (pChoise, cChoise) => {
  if (pChoise === cChoise) {
    return RESULT_DROW;
  } else if (
    (pChoise === ROCK && cChoise === SISERS) ||
    (pChoise === SISERS && cChoise === PAPER) ||
    (pChoise === PAPER && cChoise === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};

// game body
startGameBtn.addEventListener("click", () => {
  if (gameIsRunnig) {
    return;
  }
  gameIsRunnig = true;
  console.log("game is starting.....");
  const playerChoice = getPlayerChoise();
  const computerChoice = getCamputerChois();
  const winner = getWinner(playerChoice, computerChoice);
  let message = `you pic ${playerChoice} and computer pic ${computerChoice} `;
  if (winner === RESULT_COMPUTER_WIN) {
    message = message + "computer win";
  } else if (winner === RESULT_PLAYER_WIN) {
    message = message + "player win";
  } else {
    message = message + "we have a Drow";
  }
  alert(message);
  gameIsRunnig = true;
});
