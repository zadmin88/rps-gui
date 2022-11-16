function computerSelection() {
  const values = ["rock", "paper", "scissors"];

  return values[Math.floor(Math.random() * 3) + 1 - 1];
}

function playerSelection() {
  const value = prompt("Ingrese algo gay!").toLocaleLowerCase();
  return value;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win Rock beats Scissors!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win Paper beats rock!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win Scissors beats paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose rock beats Scissors!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose Paper beats rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose Scissors beats paper!";
  } else {
    return "It 's a tie!";
  }
}

function game(oneRound) {
  const results = [0, 0];
  for (let i = 0; i < 5; i++) {
    const winOrLose = oneRound(playerSelection(), computerSelection());
    console.log(winOrLose);
    if (winOrLose.includes("Win")) {
      results[0] = results[0] + 1;
    } else if (winOrLose.includes("Lose")) {
      results[1] = results[1] + 1;
    }
  }

  if (results[0] > results[1]) {
    return `You win! ${results[0]} vs ${results[1]}`;
  } else if (results[0] < results[1]) {
    return `You Lose! ${results[0]} vs ${results[1]}`;
  } else return `Tie! ${results[0]} vs ${results[1]}`;
}

console.log(game(playRound));
