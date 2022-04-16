import charData from "./data.js";

import Character from "./Character.js";







const wizard = new Character(charData.hero)
const orc = new Character(charData.monster)

function render() {
    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}

render()
