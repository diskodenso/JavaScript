"use strict";

// Funktionsausdrücke
const myFunction = function () {
    console.log(myFunction);
};

myFunction();

// Warum const (Konstante) und nicht let (Variable)
// Funktionsausdrücke verwendet man mit const - weil Konstante. Kann
// also nicht überschrieben werden

let myFunction2 = function () {
    console.log(myFunction2);
};

myFunction2();

myFunction2 = function () {
    console.log(`myFunction2 Neu`);
};
myFunction2();

// Funktionsdeklarationen - kein Ausdruck also keine ;
function myFunction3() {
    console.log(myFunction3);
}
myFunction3();

// Nicht nur das KeyWord Var ist vom Hoisting betroffen sondern auch
// Funktionsdeklarationen  - der Block wird also nach oben geschoben
// d.h man kann die Funktion überall aufrufen