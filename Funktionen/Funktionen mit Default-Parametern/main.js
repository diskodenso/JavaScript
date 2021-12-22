"use strict";

// Default-Parameter
// Man kann einen Default Wert setzten der Standardmäßig
// genutzt wird, wenn kein Parameter übergeben wird
// hier a=20, b=2, wenn z_1 und z_14 nicht übergeben werden
const myFunction = function (a = 20, b = 2) {
    console.log(a * b);
};

let z_1 = 45;
let z_14 = 2;

myFunction();

// - - - MINI CHALLENGE - - - 

// Definiere eine Funktion für eine Begrüßung. Diese Funktion 
// soll 3 Parameter übergeben bekommen (vorname, nachname, alter
// In der Funktion soll ein CLG sein "Hallo Denis Olf, du bist 28"
// Definiere für alle Parameter Defaultwerte (Max, Mustermann, 18)
// Definiere 3 Variablen und setzte auf meine Angaben
// Rufe die Funktion 2 Mal auf, einmal mit Default einmal ohne




// const miniChallenge = function (a = "Max", b = "Mustermann", c = 18) {
//     console.log(`Hallo ${a} ${b}, Du bist ${c}`);
// };

// let vorname = "Denis";
// let nachname = "Olf";
// let age = 28;

// miniChallenge(vorname, nachname, age);


const miniChallenge = function (a = "Max", b = "Mustermann", c = 18) {
    console.log(`Hallo ${a} ${b}, Du bist ${c}`);
};

let vorname = "Denis";
let nachname = "Olf";
let age = 28;

miniChallenge(vorname, nachname, age);
miniChallenge();

// Variablen werden in der Reihenfolge übergeben
// Hier werden nur zwei Parameter übergeben
// aber die Funktion erwartet 3 Parameter
// "nachname, age" wird in der Funktion als a, b eingeordnet und
// c = default
miniChallenge(nachname, age); // Console: "Hallo Olf 28, Du bist 28"

// Wenn man nur einen Teil der Variablen in die Funktion übergeben
// möchte, also sonst den Default-Wert nutzen wollen
// können wir "undefined" nutzen um die richtige
// Reiehenfolge zu wahren
miniChallenge(undefined, nachname, age); // Console: Hallo Max Olf, Du bist 28"

