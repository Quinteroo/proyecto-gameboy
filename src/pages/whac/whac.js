

import './whac.css'

export const whac = () => {
  const screen = document.querySelector('.screen');

  screen.innerHTML = "";

  let result = 0;
  let currentTime = 60;

  screen.innerHTML = `
    <div class="info">
      <h2>tu puntuación</h2>
      <h2 id="score">0</h2>
      <h2>Tiempo restante</h2>
      <h2 id="time-left">60</h2>
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
  `

  const squares = document.querySelectorAll('.square');
  const mole = document.querySelector('.mole')
  const timeLeft = document.querySelector('#time-left');
  const score = document.querySelector('#score');
  let timerId = null;  // timerId se inicializa con null y luego se asigna un valor, para declarar la variable antes de su uso y evitar que sea indefinida.


  let hitPosition;

  function randomSquare() {
    squares.forEach((square) => {
      square.classList.remove('mole')  //quitamos la clase mole al inicializarse la función para repintarlo luego
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)] //generamos un cuadrado con una posición aleatoria dentro del array squares
    console.log(randomSquare);
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id;             // almacenamos el ID del div que contiene el mole
  }


  squares.forEach((square) => {
    square.addEventListener('mousedown', () => { //añadimos a cada cuadrado la posibilidad de sumar SI coincide con mole
      if (square.id == hitPosition) {
        result++
        score.textContent = result;
        // hitPosition = null 
      }
    })
  })


  function moveMole() {
    // let timerId = null
    timerId = setInterval(randomSquare, 600) //con setInterval ejecutamos una función cada X tiempo
  }

  moveMole()


  function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;  // hacemos el temporizador
    if (currentTime == 0) {
      clearInterval(countDownTimer)
      clearInterval(timerId)    //para poder parar parar la función, la variable timerId tiene que estar fuera de la función, es decir, ser global para poder acceder a ella
      alert(`FIN DEL JUEGO! tu puntuación es de ${result}`)
    }
  }
  let countDownTimer = setInterval(countDown, 1000)

}