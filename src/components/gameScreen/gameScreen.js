import "./gameScreen.css"


export const gameScreen = () => {

  const main = document.querySelector("main")

  const screenFame = document.createElement("section")
  screenFame.classList.add("screen-fame")

  const screen = document.createElement("div")
  screen.classList.add("screen")

  screenFame.appendChild(screen)
  main.appendChild(screenFame)

}