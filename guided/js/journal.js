const questions = [
    "Was ist heute passiert, das dir besonders in Erinnerung geblieben ist?",
    "Welche Gedanken oder Gefühle haben dich dabei besonders beschäftigt?",
    "Wofür bist du heute dankbar?",
    "Was ist dir heute besonders gut gelungen?",
    "Gab es heute eine Herausforderung oder einen schwierigen Moment?",
    "Was hast du heute über dich selbst gelernt?",
    "Was möchtest du aus diesem Tag mitnehmen oder morgen anders machen?"
];

const questionText = document.getElementById("questionText");
const questionProgress = document.getElementById("questionProgress");
const answerText = document.getElementById("answerText");
const nextButton = document.getElementById("nextButton");
const nextButtonText = document.getElementById("nextButtonText");

let currentQuestionIndex = 0;
const answers = [];

nextButton.addEventListener("click", () => {
    const answer = answerText.value.trim();

    if (answer === "") {
        alert("Bitte beantworte die Frage, bevor du fortfährst.");
        answerText.focus();
        return;
    }

    answers.push({
        question: questions[currentQuestionIndex],
        answer: answer
    });

    const isLastQuestion =
        currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
        saveGuidedJournalEntry(answers);
        window.location.href = "finish.html";
        return;
    }

    currentQuestionIndex++;

    updateQuestion();
});

function updateQuestion() {
    questionText.textContent = questions[currentQuestionIndex];

    questionProgress.textContent =
        `Frage ${currentQuestionIndex + 1} von ${questions.length}`;

    answerText.value = "";
    answerText.focus();

    const isLastQuestion =
        currentQuestionIndex === questions.length - 1;

    nextButtonText.textContent =
        isLastQuestion ? "Abschließen" : "Weiter";
}