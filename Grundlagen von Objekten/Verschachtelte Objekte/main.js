"use strict";

// - -  INHABER OBJEKTE (vorname, nachname, geschlecht, alter) - - //
let inhaber_1 = {
    vorname = "Max",
    nachname = "Mustermann",
    geschlecht = "männlich",
    alter = 25
};
console.log(inhaber_1);

let inhaber_2 = {
    vorname = "Denis",
    nachname = "Olf",
    geschlecht = "weiblich",
    alter = "18"
};

// - - - Konten - - -  eine Variable inkl. aller Informationen//
let konto_1 = {
    iban: "DE13600928182732",
    bic: "VOBADESS",
    inhaber: {
        vorname: "Max",
        nachname: "Mustermann",
        geschlecht: "männlich",
        alter: 25
    },
    kontostand: 3500,
    aktiv: true
};

console.log(konto_1);

let konto_2 = {
    iban: "DE1420230239201",
    bic: "WIXHERKN",
    inahber: {
        vorname: "Denis",
        nachname: "Olf",
        geschlecht: "weiblich",
        alter: 18
    },
    kontostand: 2100,
    aktiv: true
};


console.log(inhaber_2);

// Erstelle ein Objekt mit Objekten

let auto_1 = {
    marke: "Porsche",
    modell: "911",
    kraftstoffart: "Benzin",
    kilometerstand: 20000,
    ausstattung: {
        navigationssystem: true,
        klimaanlage: true,
        sitzheizung: true,
        tempomat: true,
        panoramadach: false
    },
    zustand: "gebraucht",
    preis: `25,730 Euro` 
};

console.log(auto_1);

