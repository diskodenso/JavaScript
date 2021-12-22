"use strict";

/*
if (Bedingung) {
    "Was passiert wenn die Bedingung nicht erfüllt (true) ist"
} else {
    "Code definieren der ausgeführt wird, wenn die Bedingung nicht erfüllt ist (false)"
}
*/

if (false) {
    console.log("If wurde ausgeführt");
} else {
    console.log("Else wurde ausgefuehrt");
}

const minAge = 18; // mit const da eine Konstante die immer gleich bleibt
let myAge = 27;

if (myAge >= minAge) {
    console.log("Du bist alt genug");
} else {
    console.log("Du bist nicht alt genug");
}


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
