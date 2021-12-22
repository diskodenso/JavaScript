"use strict";
/*
let a;
a = 5;
console.log(a); ---> 5

let b; 
console.log(b); --> undefined
--- 
b wird als undefined rausgeworfen da wir b nur definieren 
aber nicht initialisieren
---

b = c;
console.log(b); --> c

c = 15;
console.log(c); Error in CLG: "c is not defined"
*/

var a;
a = 5;

var b;
console.log(b);
b = c;
console.log(b);

c = 14;
console.log(c);
var c; // funktioniert im gegensatz zu let, da var gehoistet wird (hochgezogen)

// --- !!! const muss immer direkt initialisiert werden !!! ---