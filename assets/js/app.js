var startBtn = document.querySelector("#startbtn");
var startContainer = document.querySelector(".start-container");
var quizContainer = document.querySelector(".quiz-container");

startBtn.addEventListener("click", function () {
  startContainer.classList.add("hide");
  quizContainer.classList.remove("hide");
});
