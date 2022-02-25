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
        console.log(utente1);
        console.log(utente2);

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


