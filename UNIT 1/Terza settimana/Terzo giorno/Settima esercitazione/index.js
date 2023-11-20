// tre cose 
// 1. funzione che fa addTask
// 2. funzione che gestisce attachComplete (riga sbarrata)
// 3. una funzione che attachDelete (cancella)
const handleSubmit = function (e) {
    e.preventDefault()              // evita il comportamento di default 
    addTask()
    attachComplete()
    attachDelete()
}

const addTask = function () {
    // agganciare gli elementi html come fatto stamattina 
    // stampare l'html necessario per aggiungere il value del mio campo input inputField.value
    // ogni task che aggiungo aggiunge html -> +=
    const task = document.querySelector('input').value
    const taskList = document.querySelector('#task-list')
    const li =
        `<li>
        ${task}
        <i class="far fa-trash-alt"></i>
    </li>`
    taskList.innerHTML += li

}

const attachComplete = function () {
    // aggancia gli elementi html
    // li ciclo ad esempio con for
    // all'elemento che seleziono aggiunge|toglie una classe (toggle)
    // https://www.w3schools.com/js/js_this.asp this per leggere il contenuto
    // css ->   text-decoration: line-through;
    const taskList = document.querySelector('#task-list')
    const tasks = taskList.querySelectorAll('li')
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener('click', () => {
            tasks[i].classList.toggle('task-completed')
        })
    }
}

const attachDelete = function () {
    // aggancia gli elementi html
    // ciclo for
    // metodo per rimuovere qualcosa .remove
    const taskList = document.querySelector('#task-list')
    const tasks = taskList.querySelectorAll('.task-completed')
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener('click', () => {
            tasks[i].remove()
        })
    }
}

window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}