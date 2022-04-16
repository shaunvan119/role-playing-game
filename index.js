import charData from "./data.js";
import Character from "./Character.js";


const wizard = new Character(charData.hero)
const orc = new Character(charData.monster)

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

render()
