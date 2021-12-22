"use strict";

// - - - erste Schreibweise - - -
const multiply = function (a, b) {
    return(a * b); // so erhalten wir den Wert ohne diesen In der Konsole festzuhalten
console.log("TEST") // nach return hört eine funktion auf! Daher stellt man Returns am besten ans Ende einer Logik
};

let z_1 = 13;
let z_2 = 111;

// multiply(z_1, z_2);

let result = multiply(z_1, z_2); // hier wird die funktion als Variable aufgerufen
console.log(result);

let totalResult = multiply(result, result)
console.log(totalResult);

// - - - or - - - 

// let totalResult = multiply(multiply(z_1, z_2), multuply(z_1, z_2));
// console.log(totalResult);
