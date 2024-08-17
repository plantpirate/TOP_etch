const divContainer = document.querySelector(".gridContainer");
const userGridBtn = document.querySelector(".newGrid");

const createUserGrid = function () {
  const initRows = document.querySelectorAll(".gridRow");
  initRows.forEach((row) => {
    row.remove();
  });
  const gridSides = Number(
    prompt("How many squares on each side would you like?")
  );

  for (let i = 0; i < gridSides; i++) {
    const divRow = document.createElement("div");
    divRow.classList.add("gridRow");
    divContainer.appendChild(divRow);
    for (j = 0; j < gridSides; j++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("gridSquare");
      divRow.appendChild(newSquare);
    }
  }
  const squares = document.querySelectorAll(".gridSquare");
  squares.forEach((sq) => {
    sq.addEventListener("mouseover", function () {
      function random(number) {
        return Math.floor(Math.random() * (number + 1));
      }
      const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
      sq.style.backgroundColor = rndCol;
    });
  });
};

const createInitGrid = function () {
  for (let i = 0; i < 16; i++) {
    const divRow = document.createElement("div");
    divRow.classList.add("gridRow");
    divContainer.appendChild(divRow);
    for (j = 0; j < 16; j++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("gridSquare");
      divRow.appendChild(newSquare);
    }
  }
  const squares = document.querySelectorAll(".gridSquare");
  squares.forEach((sq) => {
    sq.addEventListener("mouseover", function () {
      function random(number) {
        return Math.floor(Math.random() * (number + 1));
      }
      const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
      sq.style.backgroundColor = rndCol;
    });
  });
  userGridBtn.addEventListener("click", createUserGrid);
};
createInitGrid();
