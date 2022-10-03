const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionCard = document.getElementById('question-card')
const questionElement = document.getElementById('question')
const answerBtnElement = document.getElementById('answer-box')
const containerElement = document.getElementById('container')
let randomQuestion
let questionIndex



startBtn.addEventListener('click', startQuiz)
//next button needs to +1 to next item in array and show question
nextBtn.addEventListener('click', () => {
    questionIndex++
    nextQuestion()
})

function startQuiz() {
    startBtn.classList.add('hidden')
    //sort() will sort based on negative/positive numbers
    randomQuestion = questions.sort(() => Math.random() - 0.5)
    questionIndex = 0       //set at 0 to start at first question in array
    questionCard.classList.remove('hidden')
    nextQuestion()
}

// grabs from a random array to show next question 
function nextQuestion() {
    resetCard()
    showQuestion(randomQuestion[questionIndex])
}

//resets question card by removing preview answers
function resetCard() {
    nextBtn.classList.add('hidden')
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild(answerBtnElement.firstChild)
    }
}

// changes question on current page to next question when called 
function showQuestion(question) {
    questionElement.innerHTML = question.question
    question.answers.forEach(answer => {
        const createButton = document.createElement('button')
        createButton.innerHTML = answer.text
        createButton.classList.add('btn')
        if (answer.correct) {
            createButton.dataset.correct = answer.correct
        }
        createButton.addEventListener('click', userAnswer)
        answerBtnElement.appendChild(createButton)
    })
}

function userAnswer(e) {
    const answerChoice = e.target
    const correct = answerChoice.dataset.correct
    datasetStatus(document.body, correct) 
        Array.from(answerBtnElement.children).forEach(button => {
            datasetStatus(button, button.dataset.correct)
        })
        //checks if there are more questions in object array
        if (randomQuestion.length > questionIndex + 1) {
            nextBtn.classList.remove('hidden')
        } else {
            startBtn.innerHTML = 'Restart'
            startBtn.classList.remove('hidden')
        }
}

function datasetStatus(element, correct) {
    clearStatus(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

function clearStatus(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
  }

const questions = [
    {
        question: 'How do you comment in Javascript?',
        answers: [
            {text: '/* This is Javascript comment */', correct: false},
            {text: '// This is a Javascript comment', correct: true},
            {text: "<--This is a Javascript comment-->", correct: false},
            {text: '|| This is a Javascript comment', correct: false}
        ]
    },
    {
        question: 'What is the correct syntax for naming variable in Javascript?',
        answers: [
            {text: 'PascalCase: ThisIsTheCorrectSyntax', correct: false},
            {text: 'kebab-case: This-is-the-correct-syntax', correct: false},
            {text: 'camelCase: thisIsTheCorrectSyntax', correct: true},
            {text: 'snake_case: This_is_the_correct_syntax', correct: false}
        ]
    },
    {
        question: 'How do you call a function named "randomNumber"?',
        answers: [
            {text: 'randomNumber()', correct: true},
            {text: 'function randomNumber()', correct: false},
            {text: 'call randomNumber()', correct: false},
            {text: 'randomNumber', correct: false}
        ]
    },
    {
        question: 'What is the correct syntax to write an array in Javascript?',
        answers: [
            {text: 'var ingredients = {"flour", "eggs", "bananas", "butter"}', correct: false},
            {text: 'var ingredients = ("flour", "eggs", "bananas", "butter")', correct: false},
            {text: 'var ingredients = {flour, eggs, bananas, butter}', correct: false},
            {text: 'var ingredients = ["flour", "eggs", "bananas", "butter"]', correct: true}
        ]
    },
    {
        question:'Which of the following is correct to grab a div element with the id = button?',
        answers: [
            {text: 'document.getElementById("button")', correct: true},
            {text: 'document.querySelector(".button")', correct: false},
            {text: 'document.querySelector("#button")', correct: false},
            {text: 'document.getElementById("#button")', correct: false}
        ]
    }
]