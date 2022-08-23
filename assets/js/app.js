var startBtn = document.querySelector("#startbtn");
var startContainer = document.querySelector(".start-container");
var quizContainer = document.querySelector(".quiz-container");
var questionIndex = 0;
var questionTitleEl = document.querySelector("#question");
var choicesContainerEl = document.querySelector("#choices");
var timerContainer = document.getElementById("timer-container");
var endGameContainer = document.querySelector(".end-game");

var score = 0;
var time = 100;

startBtn.addEventListener("click", function () {
  startContainer.classList.add("hide");
  quizContainer.classList.remove("hide");
  createQuestion();
  startTimer();
});

function startTimer() {
  timerContainer.textContent = time;
  var timer = setInterval(() => {
    if (time === 0 || questionIndex === questions.length) {
      clearInterval(timer);
      endGame();
      return;
    }
    time--;
    timerContainer.textContent = time;
  }, 1000);
}

function endGame() {
  console.log("game over");
  quizContainer.classList.add("hide");
  endGameContainer.classList.remove("hide");
  document.querySelector(".end-game-btn").addEventListener("click", () => {
    var user = {
      name: document.getElementById("username").value,
      finalScore: score,
    };

    var storage = JSON.parse(localStorage.getItem("highscores"));
    if (storage === null) {
      storage = [];
    }
    storage.push(user);
    localStorage.setItem("highscores", JSON.stringify(storage));
    window.location.href = "highscores.html";
  });
}

function createQuestion() {
  if (questionIndex === questions.length) {
    return;
  }
  var currentQuestion = questions[questionIndex];
  questionTitleEl.textContent = currentQuestion.question;
  choicesContainerEl.innerHTML = "";
  for (let index = 0; index < currentQuestion.choices.length; index++) {
    const choice = currentQuestion.choices[index];
    var buttonEl = document.createElement("button");
    buttonEl.textContent = choice;
    choicesContainerEl.appendChild(buttonEl);
    choicesContainerEl.addEventListener("click", checkAnswer);
  }
}

// Need to figure out how to click on the button and get the value of the button you clicked on
function checkAnswer(e) {
  console.log(questionIndex);
  if (e.target.textContent === questions[questionIndex].answer) {
    score += 20;
    console.log("correct");
  } else {
    time -= 20;
    console.log("incorrect");
  }
  questionIndex++;
  createQuestion();
}

var questions = [
  {
    question: "1Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
  },
  {
    question: "2Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Strings",
  },
  {
    question: "3Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Booleans",
  },
  {
    question: "4Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Numbers",
  },
  {
    question: "5Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
  },
];

// if answer is correct say Correct!
// if answer is wrong say Wrong!
// keep track of score
// set a timer
// at the end of quiz write initials to record score
// click view highscores to view all scores
