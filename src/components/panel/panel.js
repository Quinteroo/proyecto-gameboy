import { cross } from "./cross/cross.js"
import { navGames } from "./navGames/navGames.js"
import "./panel.css"
import { title } from "./title/title.js"

export const panel = () => {

  const main = document.querySelector("main")
  const panel = document.createElement("section")
  panel.classList.add("panel")
  main.appendChild(panel)

  title()
  cross()
  navGames()
}