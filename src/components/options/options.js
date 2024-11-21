import "./options.css"

export const options = () => {
  const footer = document.querySelector("footer")
  const options = document.createElement("ul")
  options.classList.add("options")

  const liGithub = document.createElement("li")
  const aGithub = document.createElement("a")
  aGithub.href = "https://github.com/Quinteroo"
  aGithub.target = "_blank"

  const pGithub = document.createElement("p")
  pGithub.textContent = "GITHUB"

  liGithub.appendChild(aGithub)
  liGithub.appendChild(pGithub)

  options.appendChild(liGithub)

  const liStart = document.createElement("li")
  const aStart = document.createElement("a")
  const pStart = document.createElement("p")
  pStart.textContent = "START"

  liStart.appendChild(aStart)
  liStart.appendChild(pStart)

  options.appendChild(liStart)


  footer.appendChild(options)

}