/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* In javascript possiamo definire 5 categorie semplici di dati (stringhe, numeri, booleani, null e unfined) e una categoria complessa (gli oggetti).

Categorie semplici:
- Le stringhe sono come collane di perle. Ogni perla è una lettera e quando unisci molte perline, crei una frase o una parola. Ad esempio, "ciao" è una stringa con quattro lettere.
- I numeri sono come mattoncini con cui puoi costruire torri. Possono essere numeri interi (come 1, 2, 3) o decimali (come 1.5, 3.14). Puoi usarli per fare operazioni matematiche come l'addizione e la sottrazione.
- I booleani sono come interruttori di luce. Possono essere o accesi (true) o spenti (false).
- Null è come una scatola vuota.  Quando apri una scatola vuota, dentro non c'è niente, ed è simile a quando JavaScript restituisce "null".
- Undefined è come cercare un giocattolo che non esiste ancora, significa che la variabile o l'oggetto che stai cercando non è ancora stato creato o assegnato.

Categoria complessa:
-Gli oggetti sono come zaini che possono contenere molti oggetti diversi all'interno. Ogni oggetto ha un nome (chiave) e un valore. Ad esempio, un oggetto chiamato "cane" potrebbe avere una chiave "colore" con valore "marrone" e una chiave "taglia" con valore "media".

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
const name = "Jacopo";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var x = 12;
var y = 20;
var risultato = x + y;
console.log(risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var name = "Guelpa";
console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
var x = 12;
var numeroDaSottrarre = 4;
var risultatoSottrazione = x - numeroDaSottrarre;

console.log(risultatoSottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = "john";
var name2 = "John";
var diversi = name1 != name2;
console.log('name1 e name2 sono diversi:' diversi);

var uguali = name1.toLowerCase() == name2.toLowerCase();
console.log('name1 e name2 in lowercase sono uguali:' uguali);

