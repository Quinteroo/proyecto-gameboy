import { whac } from "../../../pages/whac/whac"
import "./navGames.css"


export const navGames = () => {
  const panel = document.querySelector(".panel")
  const navGames = document.createElement("nav")
  const gamesUl = document.createElement("ul")
  gamesUl.classList.add("games-ul")
  const liA = document.createElement("li")
  liA.classList.add("li-a")
  const liB = document.createElement("li")
  liB.classList.add("li-b")
  const liC = document.createElement("li")
  liC.classList.add("li.c")

  const gameA = document.createElement("button")
  gameA.classList.add("game-a")
  gameA.textContent = "A"
  gameA.addEventListener("click", () => whac())

  const gameB = document.createElement("button")
  gameB.classList.add("game-b")
  gameB.textContent = "B"
  gameB.addEventListener("click", () => console.log("hola desde botón B"))


  const gameC = document.createElement("button")
  gameC.classList.add("game-c")
  gameC.textContent = "C"
  gameC.addEventListener("click", () => console.log("hola desde botón C"))


  liA.appendChild(gameA)
  liB.appendChild(gameB)
  liC.appendChild(gameC)

  gamesUl.appendChild(liA)
  gamesUl.appendChild(liB)
  gamesUl.appendChild(liC)

  navGames.appendChild(gamesUl)

  panel.appendChild(navGames)

}