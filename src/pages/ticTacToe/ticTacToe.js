import "./ticTacToe.css"

export const ticTacToe = () => {
  const screen = document.querySelector('.screen');

  screen.innerHTML = "";


  screen.innerHTML = `

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
  `

  let player1 = true

  const squares = document.querySelectorAll(".square")

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
        resetGame();
        return true;
      }
    }
    return false;
  }



  function resetGame() {
    squares.forEach((square) => (square.innerHTML = ""));
    player1 = true;
  }



  function markPlayer(event) {
    const squareSelected = event.target;
    console.log(event);


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

    if (win()) {
      return;
    }
  }

  squares.forEach((square) =>
    square.addEventListener("click", markPlayer)
  );
};

