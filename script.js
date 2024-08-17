const divContainer = document.querySelector(".gridContainer");
const userGridBtn = document.querySelector(".newGrid");

const createUserGrid = function () {
  divContainer.innerHTML = "";
  const gridSides = prompt("How many squares on each side would you like?");

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
      sq.style.backgroundColor = "yellow";
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
      sq.style.backgroundColor = "yellow";
    });
  });
  userGridBtn.addEventListener("click", createUserGrid);
};
createInitGrid();
