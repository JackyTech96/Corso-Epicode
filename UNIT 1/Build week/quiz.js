const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        options: ["Central Processing Unit",
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        options: ["Final", "Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        options: ["False", "True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        options: ["False", "True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        options: [".svg", ".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        options: ["Cascading Style Sheet",
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        options: ["Nougat",
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        options: ["140", "120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        options: ["False", "True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        options: ["Java", "Python", "C", "Jakarta"],
    },
];

// Variabili globali per tenere traccia della domanda corrente, del punteggio e del timer
let currentQuestion = 0;
let score = 0;
let timer;
let current;

// Funzione per visualizzare la domanda corrente
function displayQuestion() {
    current = questions[currentQuestion];

    // Aggiorno i testi delle domande nel DOM (p id= "question")
    document.getElementById("question").innerHTML = current.question;
    document.getElementById("domanda_corrente").innerHTML = currentQuestion + 1; // Aggiungo 1 perché gli array iniziano da 0

    // Ottengo il contenitore delle risposte dal DOM
    const answersContainer = document.getElementById("answers-container");
    answersContainer.innerHTML = "";

    // Creazione dei bottoni in base al tipo di domanda
    if (current.type === "multiple" || current.type === "boolean") {

        // Determina le opzioni disponibili
        const options = current.options || ["True", "False"];

        // Creazione dei bottoni per ciascuna opzione
        options.forEach((option, index) => {
            const button = document.createElement("button");
            button.classList.add("bottone_domanda");
            button.innerText = option;
            button.addEventListener("click", () => selectAnswer(option));
            answersContainer.appendChild(button);
        });
    }

    // Inizia il timer quando viene visualizzata una nuova domanda
    startTimer();
}
// Funzione per gestire la selezione di una risposta

function selectAnswer(selectedAnswer) {
    clearTimeout(timer); // Stop del timer quando l'utente seleziona una risposta

    // Verifico se la risposta selezionata è corretta
    if (selectedAnswer === current.correct_answer) {
        score++; // Incremento del punteggio se la risposta è corretta
    }

    currentQuestion++; // Passa alla prossima domanda

    // Se ci sono ancora domande, mostra la prossima domanda
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {  // Altrimenti, mostra il risultato finale
        displayResult();
    }
}

// Funzione per interrompere il timer e passare alla prossima domanda o mostrare il risultato finale
function checkAnswer() {
    clearTimeout(timer);

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

// Funzione per avviare il timer
function startTimer() {
    let timeLeft = 60; // Tempo limite iniziale in secondi
    const timerElement = document.getElementById("timer");

    // Funzione per aggiornare il timer ogni secondo
    function updateTimer() {
        timerElement.innerText = `Tempo rimanente: ${timeLeft} secondi`;

        // Se il tempo è scaduto, chiama la funzione selectAnswer con null
        if (timeLeft === 0) {
            selectAnswer(null);
        } else { // Altrimenti, decrementa il tempo e verrà eseguita la funzione updateTimer eseguita che è trascorso il periodo di ritardo.
            timeLeft--;
            timer = setTimeout(updateTimer, 1000);
        }
    }

    // Avvia il timer
    updateTimer();
}
function displayResult() {
    document.getElementById("quiz-container").innerHTML = `<h2>Risultato del Quiz</h2><p>Hai totalizzato ${score} su ${questions.length} punti.</p>`;
}

displayQuestion();