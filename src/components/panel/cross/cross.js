import "./cross.css"


export const cross = () => {
  const panel = document.querySelector(".panel")

  const crossDiv = document.createElement("div")
  crossDiv.classList.add("cross-div")
  const cross = document.createElement("img")
  cross.src = "/assets/cross.png"
  cross.alt = "cruceta"
  cross.title = "cruceta"
  cross.loading = "lazy"

  crossDiv.appendChild(cross)

  panel.appendChild(crossDiv)
}