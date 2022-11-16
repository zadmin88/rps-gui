const userSelection = document.querySelectorAll(".buttons");
const userDiv = document.querySelector(".user");
const computerDiv = document.querySelector(".computer");
const alertText = document.querySelector(".alert-text");
const userScore = document.querySelector(".user-score").querySelector("p");
const computerScore = document
  .querySelector(".computer-score")
  .querySelector("p");

const fist = "./images/fist.png";
const fistCpu = "./images/fist-cpu.png";
const scissors = "./images/scissors.png";
const scissorsCpu = "./images/scissors-cpu.png";
const paper = "./images/paper.png";
const paperCpu = "./images/paper-cpu.png";

let results = [0, 0];

userSelection.forEach((button) => {
  button.addEventListener("click", (e) => {
    const computerSele = computerSelection();

    if (e.target.value === "rock") {
      addUserImg(fist);
    } else if (e.target.value === "paper") {
      addUserImg(paper);
    } else if (e.target.value === "scissors") {
      addUserImg(scissors);
    }

    if (computerSele === "rock") {
      addComputerImg(fistCpu);
    } else if (computerSele === "paper") {
      addComputerImg(paperCpu);
    } else if (computerSele === "scissors") {
      addComputerImg(scissorsCpu);
    }

    game(playRound, e.target.value, computerSele);
  });
});

function addUserImg(src) {
  const userImg = document.querySelector(".userImg");
  userDiv.removeChild(userImg);
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.classList.add("userImg");

  userDiv.appendChild(img);
}

function addComputerImg(src) {
  const computerImg = document.querySelector(".computerImg");
  computerDiv.removeChild(computerImg);
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.classList.add("computerImg");

  computerDiv.appendChild(img);
}

function computerSelection() {
  const values = ["rock", "paper", "scissors"];
  return values[Math.floor(Math.random() * 3) + 1 - 1];
}

function playRound(playerSelection, computerSelection) {
  alertText.innerHTML = "";
  const h3 = document.createElement("h3");

  if (playerSelection === "rock" && computerSelection === "scissors") {
    h3.textContent = "You Win Rock beats Scissors!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    h3.textContent = "You Win Paper beats rock!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    h3.textContent = "You Win Scissors beats paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    h3.textContent = "You Lose rock beats Scissors!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    h3.textContent = "You Lose Paper beats rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    h3.textContent = "You Lose Scissors beats paper!";
  } else {
    h3.textContent = "It 's a tie!";
  }

  alertText.appendChild(h3);
  return h3.textContent;
}

function game(oneRound, playerSelection, computerSelection) {
  const winOrLose = oneRound(playerSelection, computerSelection);

  if (winOrLose.includes("Win")) {
    results[0] = results[0] + 1;
    userScore.textContent = results[0];
  } else if (winOrLose.includes("Lose")) {
    results[1] = results[1] + 1;
    computerScore.textContent = results[1];
  }

  if (results[0] === 5) {
    alert(`You WIN! ${results[0]} vs ${results[1]}`);
    clearGame();
  } else if (results[1] === 5) {
    alert(`You Lose! ${results[0]} vs ${results[1]}`);
    clearGame();
  }
}

function clearGame() {
  alertText.innerHTML = "";
  results = [0, 0];
  computerScore.textContent = "0";
  userScore.textContent = "0";
}

// console.log(game(playRound));
