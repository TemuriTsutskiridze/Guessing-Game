"use strict";

const againButton = document.querySelector(".again");
const numberEl = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const bodyEl = document.body;

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

checkButton.addEventListener("click", game);

guessInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    game();
  }
});

againButton.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  scoreEl.textContent = score;
  numberEl.textContent = "?";
  numberEl.style.width = "150px";
  bodyEl.style.backgroundColor = "#222";
  guessInput.value = "";
});

function displayMessage(message) {
  messageEl.textContent = message;
}

function game() {
  const guess = parseInt(guessInput.value);
  console.log(guess, typeof guess);

  // no guess
  if (!guess) {
    displayMessage("⛔ No number");

    // guess is correct
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number");
    bodyEl.style.backgroundColor = "green";
    numberEl.style.width = "300px";

    // highscore functionality
    if (score > highscore) {
      highscore = score;
      highScoreEl.textContent = highscore;
    }

    // guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📈 Too low!");
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage("🔥 You lost the game!");
      scoreEl.textContent = 0;
    }
  }

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       messageEl.textContent = "📈 Too high!";
  //       score--;
  //       scoreEl.textContent = score;
  //     } else {
  //       messageEl.textContent = "🔥 You lost the game!";
  //       scoreEl.textContent = 0;
  //     }

  //     // guess is lower
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       messageEl.textContent = "📈 Too low!";
  //       score--;
  //       scoreEl.textContent = score;
  //     } else {
  //       messageEl.textContent = "🔥 You lost the game!";
  //       scoreEl.textContent = 0;
  //     }
  //   }
}
