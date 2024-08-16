const divContainer = document.querySelector(".container");

const initGame = function () {
  const gridHeight = prompt("How tall do you want your grid to be?");
  const gridWidth = prompt("How wide do you want your grid to be?");

  for (let i = 0; i < gridHeight; i++) {
    const divRow = document.createElement("div");
    divRow.classList.add("row");
    divRow.style.display = "flex";
    divRow.style.flexGrow = "1";
    divRow.style.alignItems = "stretch";
    divRow.style.border = "1px solid black";
    divContainer.appendChild(divRow);
    for (j = 0; j < gridWidth; j++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("square");
      newSquare.style.flexGrow = "1";
      newSquare.style.alignContent = "stretch";
      newSquare.style.border = "1px solid yellow";
      divRow.appendChild(newSquare);
    }
  }
};

initGame();
