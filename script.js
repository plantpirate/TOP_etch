const divContainer = document.querySelector(".container");

const initGame = function () {
  const divsAmount = prompt("What size grid do you want?");
  for (let i = 0; i < divsAmount; i++) {
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
