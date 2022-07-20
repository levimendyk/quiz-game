var startBtn = document.querySelector("#startbtn");
var startContainer = document.querySelector(".start-container");
var quizContainer = document.querySelector(".quiz-container");
var countDown;

startBtn.addEventListener("click", function () {
  startContainer.classList.add("hide");
  quizContainer.classList.remove("hide");
});

// if answer is correct say Correct!
// if answer is wrong say Wrong!
// keep track of score
// set a timer
// at the end of quiz write initials to record score
// click view highscores to view all scores
