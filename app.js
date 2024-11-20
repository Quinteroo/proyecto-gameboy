import { gameScreen } from './src/components/gameScreen/gameScreen.js'
import { panel } from './src/components/panel/panel.js'
import { footer } from './src/layout/footer/footer.js'
import { gameBoy } from './src/layout/gameBoy/gameBoy.js'
import { header } from './src/layout/header/header.js'
import { main } from './src/layout/main/main.js'
import './style.css'



document.addEventListener("DOMContentLoaded", () => {
  gameBoy()
  header()
  main()
  footer()
  gameScreen()
  panel()

})
