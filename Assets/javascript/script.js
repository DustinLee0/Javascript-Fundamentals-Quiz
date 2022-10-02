const startBtn = document.getElementById('start-btn')
const questionCard = document.getElementById('question-card')
let randomQuestion
let questionIndex
const questionElement = document.getElementById('question')
const answerBtnElement = document.getElementById('answer-grid')

const questions =[
    {
        question: 'How do you comment in Javascript?',
        answers: [
            {text: '/* This is Javascript comment */', answer: false},
            {text: '// This is a Javascript comment', answer: true},
            {text: '<!-- This is a Javascript comment -->', answer: false },
            {text: '\\ This is a Javascript comment', answer: false}
        ]
    },
    {
        question: 'What is the correct syntax for naming variable in Javascript?',
        answers: [
            {text: 'PascalCase: ThisIsTheCorrectSyntax', answer: false},
            {text: 'kebab-case: This-is-the-correct-syntax', answer: false},
            {text: 'camelCase: thisIsTheCorrectSyntax', answer: true},
            {text: 'snake_case: This_is_the_correct_syntax', answer: false}
        ]
    },
    {
        question: 'How do you call a function named "randomNumber"?',
        answers: [
            {text: 'randomNumber()', answer: true},
            {text: 'function randomNumber()', answer: false},
            {text: 'call randomNumber()', answer: false},
            {text: 'randomNumber', answer: false}
        ]
    },
    {
        question: 'What is the correct syntax to write an array in Javascript?',
        answers: [
            {text: 'var ingredients = {"flour", "eggs", "bananas", "butter"}', answer: false},
            {text: 'var ingredients = ("flour", "eggs", "bananas", "butter")', answer: false},
            {text: 'var ingredients = {flour, eggs, bananas, butter}', answer: false},
            {text: 'var ingredients = ["flour", "eggs", "bananas", "butter"]', answer: true}
        ]
    },
    {
        question:'Which of the following is correct to grab a this div element: "<div id="button">Hello World</div>"?',
        answers: [
            {text: 'document.getElementById("button")', answer: true},
            {text: 'document.querySelector(".button")', answer: false},
            {text: 'document.querySelector("#button")', answer: false},
            {text: 'document.getElementById("#button")', answer: false}
        ]
    },
]

startBtn.addEventListener('click', startQuiz)

function startQuiz() {
    startBtn.classList.add('hidden')
    randomQuestion = questions.sort(() => Math.random() - 0.5)
    questionIndex = 0
    questionCard.classList.remove('hidden')
    nextQuestion()
}

// grabs from a random array to show next question 
function nextQuestion() {
    showQuestion(randomQuestion[questionIndex])
    question.answers.forEach(answers => {
        const createButton = document.createElement('button')
        createButton.innerHTML = answers.text
        createButton.classList.add('btn')
        
    })
}

// changes question on current page to next question when called 
function showQuestion(question) {
    questionElement.innerHTML = question.question
}

function userAnswer() {

}