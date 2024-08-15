const divContainer = document.querySelector(".container");
// const divsAmount = prompt("What size grid do you want?");
for (let i = 1; i <= 100; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("div");
  divContainer.appendChild(newDiv);
}
