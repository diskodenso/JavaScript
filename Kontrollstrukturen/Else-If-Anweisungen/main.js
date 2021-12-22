"use strict";


/*
if (Bedingung1) {
    "Was passiert wenn die Bedingung nicht erfüllt (true) ist"
} else if {
    "Code definieren der ausgeführt wird, wenn die Bedingung nicht erfüllt ist (false)"
}
*/
/*
Dieser Code ist sehr kompliziert geschrieben das geht mit 
der else if Anweisung einfacher als im folgenden Beschrieben:

if (Bedingung 1) {
    "Was passiert wenn die Bedingung nicht erfüllt (true) ist"
} else {
    if (Bedingung 2)
    "Code definieren der ausgeführt wird, wenn die Bedingung nicht erfüllt ist (false)"
}  else {
    if (Bedingung 3)
     "Code definieren der ausgeführt wird, wenn die Bedingung nicht erfüllt ist (false)"
        }
    }
}

Der nachfolgende Code ist viel übersichtlicher:
    */

// if (Bedingung 1) {
//     "Code der ausgeführt wird, wenn die Bedingung 1 erfüllt ist (true)"
// } else if (Bedingung 2) {
//     "Code der ausgeführt wird, wenn die Bedingung 1 erfüllt ist (true)"
// } else if (Bedingung 3) {
//         "Code der ausgeführt wird, wenn die Bedingung 1 erfüllt ist (true)"
// } else {
//           "Code der ausgeführt wird, wenn die Bedingung 1 erfüllt ist (true)"
//     }

const minAge = 18; // mit const da eine Konstante die immer gleich bleibt
let myAge = 27;

if (myAge >= minAge) {
    if (myAge == minAge) {
        console.log("Du bist gerade Alt genug");
    } else {
        console.log("Du bist alt genug");
    }
} else {
    console.log("DU bist noch nicht alt genug!");
}
    
if (myAge = minAge) {
    console.log("Du bist gerade alt genug");
} else if (myAge > minAge) {
    console.log("Du bist alt genug");
} else if (myAge < minAge) {
    console.log("Du bist nicht alt genug");
}