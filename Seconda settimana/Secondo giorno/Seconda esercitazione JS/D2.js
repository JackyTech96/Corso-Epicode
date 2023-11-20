/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 // due variabili da confrontare (if else if else) console
*/

var num1 = 2;
var num2 = 1;
if (num1 > num2) {
  console.log("num1 è maggiore di num2");
} else {
  console.log("num1 è minore di num2");
}

if (num2 > num1) {
  console.log("num2 è maggiore di num1");
} else {
  console.log("num2 è minore di num1");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
  // una variabile not equal -> !==
*/

var num3 = 5;
if (num1 !== num3) {
  console.log("num1 è diverso da 5")
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// divisbile -> resto % 
  */

if (num3 % 5 == 0) {
  console.log("divisibile per 5");
} else {
  console.log("non è divisibile per 5");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
// if (serie di condizioni if -> la verifica === )
  */

var num1 = 2;
var num4 = 6;
if ((num1 === 8) || (num4 === 8) || (num1 + num4 === 8) || (num1 - num4 === 8)) {
  console.log("Almeno uno tra num1 e num4 è 8 o la loro addizione/sottrazione è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  // dichiaro 3 variabili: totale, costo, pagamento=totale -> if -> se un valore è inferiore una soglia aggiungo le spese
*/

var totale = 51;
var costo = 10;
var pagamento = "Totale da pagare";

if (totale > 50) {
  console.log(pagamento + totale + " (spedizione gratuita)");
} else {
  console.log(pagamento + totale + costo);
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
// simile a quello sopra (sconto * 0.8)
  */

var totale = 51;
var costo = 10;
var pagamento = "Totale da pagare";
var blackFriday = totale * 0.8;

if (totale > 50) {
  console.log(pagamento + blackFriday + " (spedizione gratuita)");
} else {
  console.log(pagamento + blackFriday + costo);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
  // annido una serie di if -> controllo tutte le varie condizioni e con la console stampo la condizione (quando true)
*/

var x = 6;
var y = 22;
var z = 12;

if ((x > y) && (x > z)) {
  if (y > z) {
    console.log("x è il numero più grande, il secondo è y e il più piccolo è z");
  } else {
    console.log("x è il numero più grande, il secondo è z e il piccolo + y");
  }
}

else if ((y > x) && (y > z)) {
  if (z > x) {
    console.log("y è il numero più grande, il secondo è z e il più piccolo è x");
  } else {
    console.log("y è il numero più grande, il secondo è x e il piccolo + z");
  }
}
else {
  if (x > y) {
    console.log("z è il numero più grande, il secondo è x e il più piccolo è y");
  } else {
    console.log("z è il numero più grande, il secondo è y e il piccolo + x");
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  // typeof -> if else
  */

var numero = 10;
if (typeof numero === 'number') {
  console.log("Il valore inserito è un numero.");
} else {
  console.log("Il valore inserito non è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  // modulo di 2 (%2) -> if else
  */

if (x % 2 == 0) {
  console.log(x + " è pari");
} else {
  if (x % 2 == 1) {
    console.log(x + " è dispari");
  } else {
    console.log(x + " non è un numero");
  }
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 10) {
  console.log("Meno di 10");
} else if (val > 5) {
  console.log("Maggiore di 5");
} else {
  console.log("Uguale a 5 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
// ricordatevi che siamo dentro a un oggetto -> aggiungo qualcosa (una proprietà) all'oggetto
  */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  // posso cancellare da un oggetto
*/

delete me.lastName;
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  // metodi array -> rimuovere l'ultimo elemento
  */

me.skills.pop();
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  // metodi array -> inserire qualcosa nell'array
*/

var myArray = [];

myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.push(5);
myArray.push(6);
myArray.push(7);
myArray.push(8);
myArray.push(9);
myArray.push(10);

console.log(myArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  // selezionare il nono elemento e assegnare un nuovo valore
*/

myArray.pop();
myArray.push(100);
console.log(myArray)
