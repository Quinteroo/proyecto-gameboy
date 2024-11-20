import "./title.css"

export const title = () => {
  const panel = document.querySelector(".panel")
  const title = document.createElement("h1")
  title.classList.add("title")
  title.textContent = "qugodev GAMEBOY"

  panel.appendChild(title)

}