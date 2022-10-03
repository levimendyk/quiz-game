var highscores = JSON.parse(localStorage.getItem("highscores"));
var highscoresContainer = document.querySelector(".highscores-container");

for (let index = 0; index < highscores.length; index++) {
  const element = highscores[index];
  var scoreEl = document.createElement("p");
  scoreEl.textContent = element.name + ": " + element.finalScore;
  highscoresContainer.append(scoreEl);
}
