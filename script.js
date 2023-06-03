function changeTeamCount() {
  var teamCount = parseInt(document.getElementById("teamCount").value);
  var scoreBoard = document.getElementById("scoreBoard");
  scoreBoard.innerHTML = "";

  for (var i = 1; i <= teamCount; i++) {
    var teamDiv = document.createElement("div");
    teamDiv.classList.add("team");

    var teamName = document.createElement("input");
    teamName.type = "text";
    teamName.classList.add("team-name");
    teamName.placeholder = "Team " + i;

    var scoreValue = document.createElement("div");
    scoreValue.classList.add("score-value");
    scoreValue.textContent = "0";

    var buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    var increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.addEventListener("click", function () {
      var currentScore = parseInt(this.parentNode.parentNode.querySelector(".score-value").textContent);
      this.parentNode.parentNode.querySelector(".score-value").textContent = currentScore + 10;
    });

    var decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener("click", function () {
      var currentScore = parseInt(this.parentNode.parentNode.querySelector(".score-value").textContent);
      if (currentScore > 0) {
        this.parentNode.parentNode.querySelector(".score-value").textContent = currentScore - 10;
      }
    });

    buttonContainer.appendChild(increaseButton);
    buttonContainer.appendChild(decreaseButton);

    teamDiv.appendChild(teamName);
    teamDiv.appendChild(scoreValue);
    teamDiv.appendChild(buttonContainer);

    scoreBoard.appendChild(teamDiv);
  }
}

