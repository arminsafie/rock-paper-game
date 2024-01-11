const startGameBtn = document.getElementById("start-game-btn");
//global vars
let gameIsRunnig = false;
const ROCK = "ROCK";
const PAPER = "PAPER";
const SISERS = "SISERS";
const DEFALT_USER_CHOIS = ROCK;
const RESULT_DROW = "DROW";
const RESULT_PLAYER_WIN = "PLAYER WINS";
const RESULT_COMPUTER_WIN = "COMPUTER WINS";

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK},${PAPER} or ${SISERS}?`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SISERS) {
    alert(`INVALID CHOISE WE CHOSE ${DEFALT_USER_CHOIS}`);
    return DEFALT_USER_CHOIS;
  }
  return selection;
};

const getCamputerChois = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SISERS;
  }
};

const getWinner = (cChoise, pChoise) => {
  if (cChoise === pChoise) {
    return RESULT_DROW;
  } else if (
    (cChoise === ROCK && pChoise === PAPER) ||
    (cChoise === PAPER && pChoise === SISERS) ||
    (cChoise === SISERS && pChoise === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunnig) {
    return;
  }
  gameIsRunnig = true;
  console.log("Game started...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getCamputerChois();
  const winner = getWinner(playerChoice, computerChoice);

  let message = `your pic ${playerChoice} and computer choise ${computerChoice} `;
  if (winner === RESULT_DROW) {
    message = message + "You Have DROW";
  } else if (winner === RESULT_PLAYER_WIN) {
    message = message + "Player wins";
  } else {
    message = message + "Computer wins";
  }
  alert(message);
  gameIsRunnig = false;
});

//not a game code

const sumUp = (resultHandeler, ...numbers) => {
  //* you can assighne a function inside of a function!!!!
  const validateNumber = (Number) => {
    return isNaN(Number) ? 0 : Number;
  };
  //... is a res uprator make argument to array
  let sum = 0;
  for (const num of numbers) {
    console.log(`num => ${num}`);
    sum += validateNumber(num);
  }
  return resultHandeler(sum);
};

const showResult = (result) => {
  alert("the result after adding all numbers is: " + result);
};
// when you have function key you can your a global var
const subtractUp = function () {
  let sum = 0;
  // arguments is here a global var //! dont use its not good
  for (const num of arguments) {
    sum -= num;
  }
  return sum;
};
console.log(sumUp(showResult, 1, 2, 3, 32, 234, 243, 24, 3, 42, 3));
console.log(subtractUp(showResult, 1, 2, 3, 32, 234, 243, 24, 3, 42, 3));

//! ask video 17 !!!!!!!!!!!!!!!!!!
