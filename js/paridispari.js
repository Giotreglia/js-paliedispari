// Pari e Dispari

/*
    Chiedo all'utente di scegliere se il numero vincente sarà pari o dispari e di inserire un valore uguale a "pari" o "dispari" nel prompt
    Chiedo all'utente di scegliere un numero da 1 a 5
    Genero un numero random da 1 a 5 per il computer
    Sommo il numero utente al numero del computer
    Dichiaro il vincitore

*/

// Chiedo all'utente di inserire un valore pari a "pari" o "dispari"
const sceltaUtente = prompt("Scegli se il numero vincente sarà pari o dispari e inserisci la parola 'pari' o 'dispari' qui sotto");
console.log(`Hai scelto ${sceltaUtente}`);

// Chiedo all'utente di inserire un numero da 1 a 5
const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5 e scrivilo qui sotto"));
console.log(`Il tuo numero è ${numeroUtente}`);

// Calcolo numero random da 1 a 5 per il computer
let numeroComputer = parseInt(generaNumeroRandom(1,5));
console.log(`Il numero del computer è ${numeroComputer}`);

// Calcolo somma dei due numeri
let numeroTotale = parseInt(somma(numeroUtente, numeroComputer));
console.log(`La somma dei due numeri è ${numeroTotale}`);

// Definisco se numero totale è pari o dispari
let risultatoTotale = calcoloPariDispari(numeroTotale);
console.log(`Il numero finale è ${risultatoTotale}`);

// Calcolo Vincitore
if (risultatoTotale == sceltaUtente) {
    console.log(`Hai vinto!`);
} else {
    console.log(`Ha vinto il computer!`);
}




// FUNZIONI

// Funzione pari o dispari

function calcoloPariDispari(numeroDaVerificare) {

    let risultato = "";

    if (numeroDaVerificare % 2 == 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }

    return risultato;
    
}

// Funzione numero random

function generaNumeroRandom(min, max) {

    let numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
    
}

// Funzione Somma tra 2 numeri

function somma(a,b) {

    let somma = a + b;
    return somma;

}
