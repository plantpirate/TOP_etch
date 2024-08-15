const divContainer = document.querySelector(".container");
// const divsAmount = prompt("What size grid do you want?");
const initGame = function () {
  for (let i = 0; i < 4; i++) {
    const divRow = document.createElement("div");
    divRow.classList.add("row");
    divContainer.appendChild(divRow);
    for (j = 0; j < 4; j++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("square");
      divRow.appendChild(newSquare);
    }
  }
};

initGame();
