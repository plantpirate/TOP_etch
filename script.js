const divContainer = document.querySelector(".container");
// const divsAmount = prompt("What size grid do you want?");
for (let i = 1; i <= 16; i++) {
  const newDiv = document.createElement("div");
  newDiv.style.border = "1px solid black";
  newDiv.style.width = "2rem";
  newDiv.style.height = "2rem";
  divContainer.appendChild(newDiv);
}
