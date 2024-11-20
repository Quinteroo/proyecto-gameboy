import "./options.css"

export const options = () => {
  const footer = document.querySelector("footer")
  const options = document.createElement("ul")
  options.classList.add("options")

  const liGithub = document.createElement("li")
  const buttonGithub = document.createElement("button")
  const pGithub = document.createElement("p")
  pGithub.textContent = "GITHUB"

  liGithub.appendChild(buttonGithub)
  liGithub.appendChild(pGithub)

  options.appendChild(liGithub)

  const liStart = document.createElement("li")
  const buttonStart = document.createElement("button")
  const pStart = document.createElement("p")
  pStart.textContent = "START"

  liStart.appendChild(buttonStart)
  liStart.appendChild(pStart)

  options.appendChild(liStart)


  footer.appendChild(options)

}