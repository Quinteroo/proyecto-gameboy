import { clearWhac } from "../whac/whac";
import "./ticTacToe.css";

export const ticTacToe = () => {
  clearWhac()
  const screen = document.querySelector('.screen');

  let player1Score = parseInt(localStorage.getItem("player1ScoreScissor")) || 0;
  let player2Score = parseInt(localStorage.getItem("player2ScoreScissor")) || 0;

  screen.innerHTML = "";

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
    <div class="tablero">
      <div class="square" id="1"></div>
      <div class="square" id="2"></div>
      <div class="square" id="3"></div>
      <div class="square" id="4"></div>
      <div class="square" id="5"></div>
      <div class="square" id="6"></div>
      <div class="square" id="7"></div>
      <div class="square" id="8"></div>
      <div class="square" id="9"></div>
    </div>
  `;

  let player1 = true;

  const squares = document.querySelectorAll(".square");
  const player1ScoreElement = document.querySelector(".player1-score");
  const player2ScoreElement = document.querySelector(".player2-score");

  function updateScores() {
    player1ScoreElement.textContent = player1Score;
    player2ScoreElement.textContent = player2Score;
    localStorage.setItem("player1ScoreScissor", player1Score);
    localStorage.setItem("player2ScoreScissor", player2Score);
  }

  function win() {
    const Combos = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    for (const combo of Combos) {
      const [a, b, c] = combo;
      const squareA = document.getElementById(a.toString()).innerHTML;
      const squareB = document.getElementById(b.toString()).innerHTML;
      const squareC = document.getElementById(c.toString()).innerHTML;

      if (squareA && squareA === squareB && squareA === squareC) {
        alert(`¡El jugador ${squareA} gana! 🎉🎊`);
        if (squareA === "X") {
          player1Score += 1
        } else {
          player2Score += 1
        }
        updateScores()
        resetGame();
        return true;
      }
    }
    return false;
  }

  function checkDraw() {
    const isDraw = [...squares].every(square => square.innerHTML !== "");
    if (isDraw) {
      alert("¡Es un empate! 🤝");
      resetGame();
      return true;
    }
    return false;
  }

  function resetGame() {
    squares.forEach((square) => (square.innerHTML = ""));
    player1 = true;
  }

  function markPlayer(event) {
    const squareSelected = event.target;

    if (squareSelected.innerHTML !== "") {
      alert("❌ Este cuadrado ya está seleccionado");
      return;
    }

    if (player1) {
      squareSelected.innerHTML = "X";
    } else {
      squareSelected.innerHTML = "O";
    }

    player1 = !player1;

    if (win() || checkDraw()) {
      return;
    }
  }

  squares.forEach((square) =>
    square.addEventListener("click", markPlayer)
  );
};
