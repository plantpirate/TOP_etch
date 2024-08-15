const divContainer = document.querySelector(".container");

for (let i = 0; i < 6; i++) {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "yellow";
  newDiv.style.width = "2rem";
  newDiv.style.height = "2rem";
  divContainer.appendChild(newDiv);
}
