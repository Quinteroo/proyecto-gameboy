import "./scissor.css";

export const scissor = () => {
  const screen = document.querySelector(".screen");

  screen.innerHTML = "";

  let player1Score = parseInt(localStorage.getItem("player1Score")) || 0;
  let player2Score = parseInt(localStorage.getItem("player2Score")) || 0;

  screen.innerHTML = `
    <div class="score">
      <div>
        <p>Player 1</p>
        <p class="player1-score">${player1Score}</p>
      </div>
      <div>
        <p>Player 2</p>
        <p class="player2-score">${player2Score}</p>
      </div>
    </div>

    <div class="result">
      <p class="result-text">Choose your move!</p>
    </div>

    <div class="playerChoose">
      <div class="rock option" data-choice="rock">
        <p>✊🏼</p>
        <p>Rock</p>
      </div>

      <div class="paper option" data-choice="paper">
        <p>✋🏼</p>
        <p>Paper</p>
      </div>

      <div class="scissor option" data-choice="scissors">
        <p>✌🏼</p>
        <p>Scissors</p>
      </div>
    </div>
  `;

  const resultText = document.querySelector(".result-text");
  const player1ScoreElement = document.querySelector(".player1-score");
  const player2ScoreElement = document.querySelector(".player2-score");

  const options = document.querySelectorAll(".option");

  function getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(player1, player2) {
    if (player1 === player2) return "empate";
    if (
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "paper" && player2 === "rock") ||
      (player1 === "scissors" && player2 === "paper")
    ) {
      return "player1";
    }
    return "player2";
  }

  function updateScores() {
    player1ScoreElement.textContent = player1Score;
    player2ScoreElement.textContent = player2Score;
    localStorage.setItem("player1Score", player1Score);
    localStorage.setItem("player2Score", player2Score);
  }

  function playerOption(event) {
    console.log(event.target);

    const player1 = event.target.closest(".option")?.dataset.choice;
    if (!player1) return;

    const player2 = getRandomChoice();

    const winner = determineWinner(player1, player2);

    if (winner === "empate") {
      resultText.textContent = `🤜🏼🤛🏼 Emapte! prueba otra vez!`;
    } else if (winner === "player1") {
      resultText.textContent = `✅ gana Player 1`;
      player1Score += 1;
    } else {
      resultText.textContent = `❌ gana Player 2`;
      player2Score += 1;
    }

    updateScores();
  }

  options.forEach((option) =>
    option.addEventListener("click", playerOption)
  );
};


