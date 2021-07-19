const quizData = [
  {
    question: "Who is PM of India in 2020? ",
    a: "Manmohan Singh",
    b: "Vajpayee",
    c: "Narenda Modi",
    d: "Indira Gandhi",
    answer: "c",
  },
  {
    question: "What animal kingdom does human belong to?",
    a: "Amphibian",
    b: "Mammal",
    c: "Reptiles",
    d: "Insect",
    answer: "b",
  },
  {
    question: "Who is the creator of Javascript ?",
    a: "Charles Babbage",
    b: "Brendan Eich",
    c: "Steve Jobs",
    d: "Bill Gates",
    answer: "b",
  },
  {
    question: "When is The United States of America's liberation day",
    a: "July 2",
    b: "July 3",
    c: "July 4",
    d: "July 5",
    answer: "c",
  },
];

let currentQuestionNumber = 0;
let myScore = 0;
let questionLength = quizData.length;

const questionEl = document.querySelector("#question");
const optionBEl = document.querySelector("#b_text");
const optionAEl = document.querySelector("#a_text");
const optionCEl = document.querySelector("#c_text");
const optionDEl = document.querySelector("#d_text");
const allOptions = document.querySelectorAll("[name='answer']");
const submitBtn = document.querySelector("#submit");

function loadQuiz(questionNumber) {
  const firstQuiz = quizData[questionNumber];
  questionEl.innerText = firstQuiz.question;
  optionAEl.innerText = firstQuiz.a;
  optionBEl.innerText = firstQuiz.b;
  optionCEl.innerText = firstQuiz.c;
  optionDEl.innerText = firstQuiz.d;
}

loadQuiz(currentQuestionNumber);

function unSelectAllRadios() {
  allOptions.forEach((eachOption) => (eachOption.checked = false));
}

function getSelectedOption() {
  let selectedOption;
  allOptions.forEach(function (eachOption) {
    if (eachOption.checked === true) {
      selectedOption = eachOption.id;
    }
  });
  return selectedOption;
}

function score() {
  const selectedOption = getSelectedOption();
  const scoreIndex = currentQuestionNumber;
  if (currentQuestionNumber === questionLength) {
    scoreIndex = scoreIndex + 1;
  }

  let correctAnswer = quizData[scoreIndex - 1].answer;
  if (selectedOption === correctAnswer) {
    myScore = myScore + 1;
  }
}

function showResults() {
  const scoreElement = document.querySelector("#score");
  scoreElement.innerText = "Your score is " + myScore;
}

function loadNextQuestion() {
  currentQuestionNumber = currentQuestionNumber + 1;

  if (currentQuestionNumber < questionLength) {
    loadQuiz(currentQuestionNumber);
    score();
    unSelectAllRadios();
  } else {
    showResults();
  }
}

submitBtn.addEventListener("click", loadNextQuestion);
