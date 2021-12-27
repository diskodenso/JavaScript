"use strict";

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

// Werte auslesen

let wert_1 = konto_1.iban;
console.log(wert_1);

let wert_2 = konto_2.iban;
console.log(wert_2);

let wert_3 = konto_1.inhaber.vorname;
console.log(wert_3);

console.log(`${konto_1.inhaber.vorname} ${konto_1.inhaber.vorname} hat ${konto_1.kontostand}€ auf dem Konto`);

// Eigenschaften setzten (hinzufügen)

konto_1.abhebeLimit = 1000;
console.log(konto_1);
console.log(konto_1.abhebeLimit);

// Werte settzen bzw verändern

konto_1.kontostand = 3000;
console.log(konto_1.kontostand);


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

// Füge dem Objekt PS als neue Eigenschaft hinzu
auto_1.PS = 190;

// Verändere eine Eigenschaft des Objekts
auto_1.modell = "Cayene";
// Gebe ein Template String (`blablabla` - template string) aus 
console.log(`Ein ${auto_1.marke} ${auto_1.modell} hat ${auto_1.PS}`);
