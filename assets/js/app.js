var startBtn = document.querySelector("#startbtn");
var startContainer = document.querySelector(".start-container");
var quizContainer = document.querySelector(".quiz-container");
var questionIndex = 0;
var questionTitleEl = document.querySelector("#question");
var choicesContainerEl = document.querySelector("#choices");

startBtn.addEventListener("click", function () {
  startContainer.classList.add("hide");
  quizContainer.classList.remove("hide");
  createQuestion();
});

function createQuestion() {
  var currentQuestion = questions[questionIndex];
  questionTitleEl.textContent = currentQuestion.question;
  choicesContainerEl.innerHTML = "";
  for (let index = 0; index < currentQuestion.choices.length; index++) {
    const choice = currentQuestion.choices[index];
    var buttonEl = document.createElement("button");
    buttonEl.textContent = choice;
    choicesContainerEl.appendChild(buttonEl);
  }
}

choicesContainerEl.addEventListener("click", checkAnswer);

// Need to figure out how to click on the button and get the value of the button you clicked on
function checkAnswer() {
  questionIndex++;
  createQuestion();
}

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
  },
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
  },
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
  },
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
  },
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
  },
];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
// if answer is correct say Correct!
// if answer is wrong say Wrong!
// keep track of score
// set a timer
// at the end of quiz write initials to record score
// click view highscores to view all scores
