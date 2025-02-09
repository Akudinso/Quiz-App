//Array of object containing or storing questons, choices and correctAnswer
const questions = [
    {
        question: "What is the capital of Nigeria?",
        choices: ["Anambra", "Kano", "Kenya", "Abuja"],
        correctAnswer: "Abuja",
    },
    {
        question: "All but one is a not a Learnable learning tracks",
        choices: ["Machine Learning", "Backend", "Product Design", "Web 3"],
        correctAnswer: "Machine Learning",
    },
    {
        question: "What does HTML stand for?",
        choices: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Modern Language",
            "Hyperlinks and Text Markup Language",
        ],
        correctAnswer: "Hyper Text Markup Language",
    }
];

//Tracking quiz state
let currentQuestionIndex = 0;
let score = 0;

//Display Question and Choices
function displayQuestion() {
    const questionContainer = document.getElementById("question");
    const choicesContainer = document.getElementById("choices");
    const progress = document.getElementById("progress");

    if (currentQuestionIndex < questions.length) {
        let currentQuestion = questions[currentQuestionIndex];
        questionContainer.textContent = currentQuestion.question;
        choicesContainer.innerHTML = "";

        currentQuestion.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.classList.add("choice-btn");
            button.onclick = () => checkAnswer(choice);
            choicesContainer.appendChild(button);
        });

        progress.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    } else {
        showResults();
    }
}

//Handle user answers and update score
function checkAnswer(selectedChoice) {
    let correct = questions[currentQuestionIndex].correctAnswer;

    if (selectedChoice === correct) {
        score++;
    }

    currentQuestionIndex++;
    displayQuestion();
}


//Display final Score
function showResults() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} / ${questions.length}</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}


//Restart Quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

// Start the quiz when the page loads
displayQuestion();
