// Variables
const maxPoints = 40;
let attributes = {
    strength: 0,
    mana: 0,
    charisma: 0,
    inteligence: 0,
    hp: 0
}
// communicate
const maxPointsInfo = document.getElementById("max-points");
// span's
const strSpan = document.getElementById("strength-number");
const manaSpan = document.getElementById("mana-number");
const charSpan = document.getElementById("char-number");
const intSpan = document.getElementById("int-number");
const hpSpan = document.getElementById("hp-number");

// sum of all attributes
function sum() {
    let sum = attributes.strength + attributes.mana + attributes.charisma + attributes.inteligence + attributes.hp;
    return sum;
}
function increase(value) {
    pointSum = sum();
    if (pointSum < maxPoints) {
        value++;
        maxPointsInfo.style.visibility = "hidden";
    }
    else {
        maxPointsInfo.style.visibility = "visible";
        maxPointsInfo.innerText = "Points Level reached! Decrease other attribute to add this point";
    }
    return value;
}

function decrease(value) {
    if (value > 0) {
        value--;
        maxPointsInfo.style.visibility = "hidden";
    }
    else {
        maxPointsInfo.style.visibility = "visible";
        maxPointsInfo.innerText = "This attribute can't be lower then 0!";
    }
    return value;
}
//strength functions
function strIncrease() {
    let newStrength = increase(attributes.strength);
    attributes.strength = newStrength;
    strSpan.innerText = attributes.strength;
}
function strDecrease() {
    let newStrength = decrease(attributes.strength);
    attributes.strength = newStrength;
    strSpan.innerText = attributes.strength;
}

//mana functions
function manaIncrease() {
    let newMana = increase(attributes.mana);
    attributes.mana = newMana;
    manaSpan.innerText = attributes.mana;
}
function manaDecrease() {
    let newMana = decrease(attributes.mana);
    attributes.mana = newMana;
    manaSpan.innerText = attributes.mana;
}

// charisma functions
function charIncrease() {
    let newChar = increase(attributes.charisma);
    attributes.charisma = newChar;
    charSpan.innerText = attributes.charisma;
}
function charDecrease() {
    let newChar = decrease(attributes.charisma);
    attributes.charisma = newChar;
    charSpan.innerText = attributes.charisma;
}

// inteligence functions
function intIncrease() {
    let newInt = increase(attributes.inteligence);
    attributes.inteligence = newInt;
    intSpan.innerText = attributes.inteligence;
}
function intDecrease() {
    let newInt = decrease(attributes.inteligence);
    attributes.inteligence = newInt;
    intSpan.innerText = attributes.inteligence;
}

// hp functions
function hpIncrease() {
    let newHp = increase(attributes.hp);
    attributes.hp = newHp;
    hpSpan.innerText = attributes.hp * 10;
}
function hpDecrease() {
    let newHp = decrease(attributes.hp);
    attributes.hp = newHp;
    hpSpan.innerText = attributes.hp * 10;
}

function showTable() {
    // show table
    let table = document.getElementById("attribute-table");
    let playerName = document.getElementById("player-name");
    let playerClass = document.getElementById("player-class");

    if (playerName.value && playerClass.value != "") {
        let row = table.insertRow();
        let firstCell = row.insertCell(0);
        let secondCell = row.insertCell(1);
        firstCell.innerHTML = playerName.value;
        secondCell.innerHTML = playerClass.value;
        table.style.visibility = "visible";

        /* for every pair key/value in attributes:
            add to element 'table' another row and display to the user */
        for (const [key, value] of Object.entries(attributes)) {
            let row = table.insertRow();
            let firstCell = row.insertCell(0);
            let secondCell = row.insertCell(1);
            if (key === "hp") {
                firstCell.innerHTML = key;
                secondCell.innerHTML = value * 10;
            }
            else {
                firstCell.innerHTML = key;
                secondCell.innerHTML = value;
            }
        }
    }
    else {
        alert("Fill name and class field!");
        table.style.visibility = "hidden";
    }



}