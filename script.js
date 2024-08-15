const divContainer = document.querySelector(".container");
const divsAmount = prompt("What size grid do you want?");
for (let i = 0; i <= divsAmount; i++) {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "yellow";
  newDiv.style.width = "2rem";
  newDiv.style.height = "2rem";
  divContainer.appendChild(newDiv);
}
