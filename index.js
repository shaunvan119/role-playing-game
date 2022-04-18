import charData from "./data.js";
import Character from "./Character.js";

function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    render()
    wizard.takeDamage()
    orc.takeDamage()
}


function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

document.getElementById("attack-button").addEventListener("click", attack)
const wizard = new Character(charData.hero)
const orc = new Character(charData.monster)

render()
