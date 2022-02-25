
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

/*

