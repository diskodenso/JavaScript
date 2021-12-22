"use strict";


// Gültigkeitsbereich: Bereich in dem man Zugriff auf Variablen hat

// - - -Globale Variablen werden außerhalb aller Codeblöcke definiert und sind
// von überall zugänglich
// - - - Lokale Variablen werden innerhalb eines Codeblockes definiert und
// sind nur in diesem und den darin enthaltenen Codeblöcken zugänglich aber nicht außerhalb!!!


// Globaler Gültigkeitsbereich
let variable_1 = "Variable_1";
    // Lokaler Gültigkeitsbereich
const myFunction = function () {
    let variable_2 = "Variable_2";
    if (true) {
                // Lokaler Gültigkeitsbereich 1.1
        let variable_3 = "Variable_3"
        console.log(variable_1);
        console.log(variable_2);
       //  console.log(variable_3);
        // geht nicht da variable_3 auserhalb der Klammer
    }
};

myFunction();

let variable_3 = "Variable 3";
