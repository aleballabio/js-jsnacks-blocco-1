
/*Snack 2

let utente1 = prompt('Inserisci una parola');
let numbers = /[0-9]/g;

if (numbers.test(utente1)) {
    alert('Inserire una parola')
    utente1 = ""
    location.reload();
}

else {
    let utente2 = prompt("Inserisci un'altra parola");

    if (numbers.test(utente2)) {
        alert('Inserire una parola')
        utente2 = ""
        location.reload();
    }

    else {
        const text = document.querySelector('.stamp');

        if (utente1.length > utente2.length) {
            text.innerHTML += (utente1 + ' ' + utente2);
        }

        else if (utente1.length < utente2.length) {
            text.innerHTML += (utente2 + ' ' + utente1);
        }

        else {
            text.innerHTML += (utente1 + ' ' + utente2);
        }
    }
}
*/

/*Snack 3

const text = document.querySelector('.stamp');

let arrNumbers = [];
let somma = 0

for (let numero = 0; numero < 10; numero++) {
    const utenteNumero = parseInt(prompt('Inserisci un numero'));
    //Parse Int per i numeri e somme
    arrNumbers.push(utenteNumero);
}

for (let time = 0; time < arrNumbers.length; time++) {
    somma = somma + arrNumbers[time];
}

text.innerHTML = somma;

*/

/* const stamp = document.querySelector('.stamp');

const arrInvitati = [
    'Marcolino',
    'Genoveffa',
    'Stotto',
    'Camillo',
    'Paolino'];

const arrArrivati = [];

let utente = prompt('Come ti chiami?');

for (let invitato = 0; invitato < arrInvitati.length; invitato++) {
    if (utente.toLowerCase() === arrInvitati[invitato].toLowerCase()) {
        arrInvitati.pop(utente);
        arrArrivati.push(utente);
        stamp.innerHTML += (utente + ' ' + 'è arrivato alla festa. <br> Benvenuto!');
        break;
    } else {
        stamp.innerHTML += ('Fuori dalla mia festa ' + utente + '!');
        break;
    }
}
*/


/*Snack 5
arrDispari = [];

for (let numero = 0; numero < 6; numero++) {
    const numeroUtente = parseInt(prompt('Inserisci un numero'));

    if (numeroUtente % 2 === 1) {
        arrDispari.push(numeroUtente);
        console.log(arrDispari);
    }
}
*/
const text = document.querySelector('.stamp');
const numero = parseInt(prompt('Inserisci un numero di 4 cifre'));

const arrNumberSplit = numero.toString().split('');
const arrNumberFinal = arrNumberSplit.map(Number);
let sum = 0;

for (let time = 0; time < arrNumberFinal.length; time++) {
    sum = sum + arrNumberFinal[time];
}

text.innerHTML = sum;
