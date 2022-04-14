const heroElementId = "hero"
const heroName = "Wizard"
const heroAvatar = "assets/wizard.png"
const heroHealth = 60
const heroDiceRoll = 6

const monsterElementId = "monster"
const monsterName = "Orc"
const monsterAvatar = "assets/orc.png"
const monsterHealth = 10
const monsterDiceRoll = 4

function renderCharacter(elementId, name, avatar, health, diceRoll) {
    document.getElementById(elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                <div class="dice"> ${diceRoll} </div>
            </div>
        </div>`
}

renderCharacter(heroElementId, heroName, heroAvatar, heroHealth, heroDiceRoll);
renderCharacter(monsterElementId, monsterName, monsterAvatar, monsterHealth, monsterDiceRoll);