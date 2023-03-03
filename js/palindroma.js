// Parola palindroma

/*
    Chiedere all'utente di inserire una parola
    Stabilire se la parola inserita è palindroma
*/

// Chiedo all'utente di inserire una parola
let parolaUtente = prompt("Inserisci una parola");

// Definisco se parola è palindroma

console.log(parolaPalindroma(parolaUtente)); 

//FUNZIONI

// Funzione per verifica se una parola è palindroma

function parolaPalindroma(parola) {

    let parolaDritta = [];
    let parolaReverse = [];
    let risultato;

    for (let i = 0; i < parola.length; i++) {
        parolaDritta.push(parola[i]);
    }

    console.log(parolaDritta);

    for (let i = parola.length - 1; i >= 0; i--) {
        parolaReverse.push(parola[i]); 
    }

    console.log(parolaReverse);

    if (arrayEquals(parolaDritta, parolaReverse)) {
        risultato = "La parola è palindroma";
    } else {
        risultato = "La parola non è palindroma";
    }
        
    return risultato;
} 

// Funzione per verificare se due array sono uguali

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

