// stroging object data into hero and monter varibles

const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "assets/wizard.png",
    health: 60,
    diceRoll: 3,
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "assets/orc.png",
    health: 10,
    diceRoll: 4,
}


//storing {elementId, name, avatar, health, diceRoll} into data which gets passed into our renderCharacter function
function renderCharacter(data) {
    const {elementId, name, avatar, health, diceRoll} = data
    //inner HTML displaying to the DOM
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


//passing the function with varibles hero and monster
renderCharacter(hero)
renderCharacter(monster)