import "./gameBoy.css"



export const gameBoy = () => {
  const body = document.querySelector("body")

  const gameBoy = document.createElement("div")
  gameBoy.classList.add("game-boy")

  body.appendChild(gameBoy)
}