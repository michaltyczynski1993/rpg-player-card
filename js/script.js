// Variables
let strength = 0;
let mana = 0;
let charisma = 0;
let inteligence = 0;
let hp = 0;
const maxPoints = 40;
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
    let sum = strength + mana + charisma + inteligence + hp;
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
    let newStrength = increase(strength);
    strength = newStrength;
    strSpan.innerText = strength;
}
function strDecrease() {
    let newStrength = decrease(strength);
    strength = newStrength;
    strSpan.innerText = strength;
}

//mana functions
function manaIncrease() {
    let newMana = increase(mana);
    mana = newMana;
    manaSpan.innerText = mana;
}
function manaDecrease() {
    let newMana = decrease(mana);
    mana = newMana;
    manaSpan.innerText = mana;
}

// charisma functions
function charIncrease() {
    let newChar = increase(charisma);
    charisma = newChar;
    charSpan.innerText = charisma;
}
function charDecrease() {
    let newChar = decrease(charisma);
    charisma = newChar;
    charSpan.innerText = charisma;
}

// inteligence functions
function intIncrease() {
    let newInt = increase(inteligence);
    inteligence = newInt;
    intSpan.innerText = inteligence;
}
function intDecrease() {
    let newInt = decrease(inteligence);
    inteligence = newInt;
    intSpan.innerText = inteligence;
}

// hp functions
function hpIncrease() {
    let newHp = increase(hp);
    hp = newHp;
    hpSpan.innerText = hp * 10;
}
function hpDecrease() {
    let newHp = decrease(hp);
    hp = newHp;
    hpSpan.innerText = hp * 10;
}