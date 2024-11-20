import { options } from "../../components/options/options"
import "./footer.css"


export const footer = () => {
  const gameBoy = document.querySelector(".game-boy")

  const footer = document.createElement("footer")

  const altavoz = document.createElement("img")
  altavoz.classList.add("altavoz")
  altavoz.src = "./assets/altavozgameboy.png"
  altavoz.title = "imagen altavoz de gameboy"
  altavoz.alt = "imagen altavoz de gameboy"
  altavoz.loading = "lazy"

  const phones = document.createElement("img")
  phones.classList.add("phones")
  phones.src = "./assets/phones-game-boy.png"
  phones.title = "imagen phones de gameboy"
  phones.alt = "imagen phones de gameboy"
  phones.loading = "lazy"

  footer.appendChild(phones)
  footer.appendChild(altavoz)
  gameBoy.appendChild(footer)

  options()


}