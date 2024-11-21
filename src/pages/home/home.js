import "./home.css"

export const home = () => {
  const screen = document.querySelector('.screen')
  screen.innerHTML = "";

  screen.innerHTML = `
  <div class="home">
  <h2 class="title">Escoja juego!</h2>
  <ul>
    <li>👾 🕹️ 🐉</li>
    <li class="game-name">A > whac a mole</li>
    <li class="game-name">B > tres en raya</li>
    <li class="game-name">C > pieda, papel, tijera</li>
    <li class="inicio">start > pantalla inicio</li>
  </ul>
  </div>
  `
}