import './whac.css';

let whacActive = false;
let whacTimers = [];

export const whac = () => {
  if (whacActive) return;
  whacActive = true;

  const screen = document.querySelector('.screen');
  screen.innerHTML = "";

  let result = 0;
  let currentTime = 60;

  let highestScore = localStorage.getItem('highestScore');
  highestScore = highestScore ? parseInt(highestScore, 10) : 0;

  screen.innerHTML = `
    <div class="info">
      <h2>Tu puntuación</h2>
      <h2 id="score">0</h2>
      <h2>Tiempo restante</h2>
      <h2 id="time-left">60</h2>
      <h2>Puntuación más alta</h2>
      <h2 id="highest-score">${highestScore}</h2>
    </div>
    <div class="grid">
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

  const squares = document.querySelectorAll('.square');
  const timeLeft = document.querySelector('#time-left');
  const score = document.querySelector('#score');
  const highestScoreElement = document.querySelector('#highest-score');
  let hitPosition;

  function randomSquare() {
    squares.forEach((square) => {
      square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
  }

  squares.forEach((square) => {
    square.addEventListener('mousedown', () => {
      if (square.id == hitPosition) {
        result++;
        score.textContent = result;
        square.classList.remove('mole');
        hitPosition = null
      }
    });
  });

  function moveMole() {
    let moleTimerId = setInterval(randomSquare, 600);
    whacTimers.push(moleTimerId);
  }

  moveMole();

  function countDown() {
    if (whacActive) {
      currentTime--;
      timeLeft.textContent = currentTime;
      if (currentTime === 0) {
        clearWhac();

        if (result > highestScore) {
          highestScore = result;
          highestScoreElement.textContent = highestScore;
          localStorage.setItem('highestScore', highestScore);
        }

        alert(`FIN DEL JUEGO! Tu puntuación es de ${result}`);
      }

    }

  }

  let countDownTimer = setInterval(countDown, 1000);
  whacTimers.push(countDownTimer);
};


export const clearWhac = () => {
  whacTimers.forEach((timerId) => clearInterval(timerId));
  whacTimers = [];
  whacActive = false;
};
