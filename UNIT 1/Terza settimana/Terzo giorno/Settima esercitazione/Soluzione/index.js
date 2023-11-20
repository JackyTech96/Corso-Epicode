// Funzione che gestisce l'invio del modulo
const handleSubmit = function (e) {
    e.preventDefault(); // Ferma il comportamento normale del modulo (non ricarica la pagina)
    addTask(); // Chiama la funzione per aggiungere un nuovo task
    attachComplete(); // Chiama la funzione per gestire il completamento del task
    attachDelete(); // Chiama la funzione per gestire l'eliminazione del task
};

// Funzione per aggiungere un nuovo task
const addTask = function () {
    // Ottiene gli elementi HTML necessari
    let tasks = document.querySelector('#tasks'); // Prende l'elemento con l'id 'tasks' dalla pagina
    let inputField = document.querySelector('#newTask input'); // Prende l'input del nuovo task inserito dall'utente

    // Crea l'HTML per il nuovo task con il testo inserito dall'utente
    let newTask = `
        <div class="task">
            <span id="taskname">${inputField.value}</span> 
            <button class="delete"><i class="far fa-trash-alt"></i></button>
        </div>`; // Crea un nuovo task con il testo dell'input e un pulsante di eliminazione

    // Aggiunge l'HTML del nuovo task alla lista dei task e resetta il campo di input
    tasks.innerHTML += newTask; // Aggiunge il nuovo task alla lista di task nella pagina
    inputField.value = ''; // Resetta il campo di input dopo aver aggiunto il task
};

// Funzione per gestire il completamento del task
const attachComplete = function () {
    // Ottiene tutti gli elementi con la classe 'task' (i task nella lista)
    let allTasks = document.querySelectorAll('.task'); // Prende tutti gli elementi con la classe 'task'

    // Aggiunge un evento di click a ciascun task nella lista
    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].addEventListener('click', function () {
            this.classList.toggle('completed'); // Aggiunge o rimuove la classe 'completed' quando un task viene cliccato
        });
    }
};

// Funzione per gestire l'eliminazione del task
const attachDelete = function () {
    // Ottiene tutti gli elementi con la classe 'delete' (i pulsanti di eliminazione)
    let allDeleteButtons = document.querySelectorAll('.delete'); // Prende tutti gli elementi con la classe 'delete'

    // Aggiunge un evento di click a ciascun pulsante di eliminazione nella lista
    for (let i = 0; i < allDeleteButtons.length; i++) {
        allDeleteButtons[i].addEventListener('click', function (e) {
            e.stopPropagation(); // Ferma la propagazione dell'evento di click al task
            this.parentNode.remove(); // Rimuove l'elemento del task quando il pulsante viene cliccato
        });
    }
};

// Assicura che il codice venga eseguito solo dopo che la pagina è stata completamente caricata
window.onload = function () {
    let form = document.querySelector('form'); // Prende l'elemento del modulo nella pagina
    form.addEventListener('submit', handleSubmit); // Aggiunge un gestore di eventi alla submit del modulo
};
