const divContainer = document.querySelector(".container");
const divsAmount = prompt("What size grid do you want?");
const initGame = function () {
  for (let i = 1; i <= divsAmount; i++) {
    if (divsAmount <= 100) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("div");
      newDiv.style.border = "1px solid black";
      newDiv.style.minWidth = "10%";
      newDiv.style.flex = "1 1 auto";
      divContainer.appendChild(newDiv);
    }
  }
};

initGame();
