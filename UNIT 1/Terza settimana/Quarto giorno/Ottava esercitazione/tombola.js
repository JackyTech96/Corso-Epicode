// 1. funzione che genera la tabella con tutti i numeri
// 2. funzione che scrive i numeri (push in un array)
// 3. funzione (associata al bottone) che genera dei numeri randomi
// 4. funzione che aggiunge una class classList.add('highlight')
// 5. funzione che genera delle tabelline da 24
// funzioni vanno dichiarate e invocate

// Funzione per creare il tabellone al caricamento della pagina
function creaTabellone() {
    const tabelloneDiv = document.getElementById('tabellone');
    for (let i = 1; i <= 76; i++) {
        const cella = document.createElement('div');
        cella.classList.add('cella');
        cella.innerText = i;
        tabelloneDiv.appendChild(cella);
    }
}

window.addEventListener('load', creaTabellone);

// Funzione per generare un numero casuale tra 1 e 76
function generaNumeroCasuale() {
    return Math.floor(Math.random() * 76) + 1;
}

// Funzione per confrontare il numero casuale con il numero della cella e aggiungere la classe se sono uguali
function confrontaNumeri(numeroCasuale) {
    const celleSelezionate = document.querySelectorAll('.cella');

    for (let i = 0; i < celleSelezionate.length; i++) {
        const numeroCella = parseInt(celleSelezionate[i].innerText);
        if (numeroCella === numeroCasuale) {
            celleSelezionate[i].classList.add('highlight');
        }
    }
}

// Funzione per l'estrazione di un numero casuale quando il bottone viene premuto
function estrazioneNumeroCasuale() {
    const numeroCasuale = generaNumeroCasuale();
    confrontaNumeri(numeroCasuale);
}


// Ottengo il bottone dal DOM e aggiungo l'evento di click
const bottone = document.querySelector('button');
bottone.addEventListener('click', estrazioneNumeroCasuale);


