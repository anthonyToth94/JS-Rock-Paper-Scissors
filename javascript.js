//Game project
const game = () => {
  //variables
  let userPoint = 0;
  let compPoint = 0;
  const compArray = ["rock", "paper", "scrissors"];

  //StartGame here
  const startGame = () => {
    const playButton = document
      .getElementById("play")
      .getElementsByTagName("button")[0];
    playButton.addEventListener("click", function () {
      const display = document.querySelector(".display");
      display.classList.add("displayOn");
      playButton.style.display = "none";
    });
  };

  //Game Control
  const gameControl = () => {
    //Save the element where the whole app will run
    const choices = document.querySelectorAll("#choice button");
    //Save the element where upload the score and the choices
    const scoreSpan = document
      .getElementById("score")
      .getElementsByTagName("span")[1];
    const youSpan = document
      .getElementById("check")
      .getElementsByTagName("button")[0];
    const enemySpan = document
      .getElementById("check")
      .getElementsByTagName("button")[1];
    const show = document.querySelector(".show");

    for (index of choices) {
      index.addEventListener("click", function () {
        //Computer choice inside the click event
        const rnd = Math.floor(Math.random() * compArray.length);
        const compChoice = compArray[rnd];
        const youChoice = this.textContent;

        youSpan.textContent = youChoice;
        enemySpan.textContent = compChoice;
        show.classList.add("displayOn");

        //Call the check method inside the click event
        checkWinner(youChoice, compChoice);
        scoreSpan.textContent = `${userPoint} - ${compPoint}`;
      });
    }
  };

  const checkWinner = (youChoice, compChoice) => {
    const whoWin = document
      .getElementById("check")
      .getElementsByTagName("span")[0];
    if (youChoice === compChoice) {
      whoWin.textContent = "It is a tie";
      return;
    } else if (youChoice === "rock" && compChoice === "scrissors") {
      whoWin.textContent = "You win";
      userPoint++;
      return;
    } else if (youChoice === "rock" && compChoice === "paper") {
      whoWin.textContent = "Computer win";
      compPoint++;
      return;
    } else if (youChoice === "paper" && compChoice === "rock") {
      whoWin.textContent = "You win";
      userPoint++;
      return;
    } else if (youChoice === "paper" && compChoice === "scrissors") {
      whoWin.textContent = "Computer win";
      compPoint++;
      return;
    } else if (youChoice === "scrissors" && compChoice === "paper") {
      whoWin.textContent = "You win";
      userPoint++;
      return;
    } else if (youChoice === "scrissors" && compChoice === "rock") {
      whoWin.textContent = "Computer win";
      compPoint++;
      return;
    }
  };
  //Call the methods outside
  startGame();
  gameControl();
};
game();
