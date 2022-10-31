// Variables
let strength = 0;
let mana = 0;
let charisma = 0;
let inteligence = 0;
let hp = 10;
const maxPoints = 40;

// sum of all attributes
function sum() {
    let sum = strength + mana + charisma + inteligence + hp;
    return sum;
}
// jeśli guzik zostanie wciśnięty to
// zwiększ wartość o 1 i wyświetl całkowitą liczbę punktu jako pole span
function strIncrease(spanId) {
    let element = document.getElementById(spanId);
    pointSum = sum();
    if (pointSum < maxPoints) {
        strength++;
        element.innerText = strength;

    }
}

function decrease() { }