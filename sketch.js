const container = document.querySelector("#container");

function draw_grid(boxes) {
  container.innerHTML = "";
  for (let i = 0; i < boxes * boxes; i++) {
    const boxSize = Math.floor(600 / boxes);
    const square = document.createElement("div");
    square.className = "box";
    square.id = "box" + i;
    square.style.backgroundColor = "#E8E8E8";
    square.style.height = boxSize + "px";
    square.style.width = boxSize + "px";
    container.append(square);
    square.addEventListener("mouseover", function (e) {
      const box = document.getElementById(e.target.id);
      if (box != null) {
        //box.style.backgroundColor = "red";
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        box.style.backgroundColor = "#" + randomColor;
      }
    });
  }
}

const button = document.querySelector("#newGrid");
button.addEventListener("click", () => {
  let gridSize = prompt("How many squares per side (1-100): ");
  while (gridSize < 1 || gridSize > 100) {
    gridSize = prompt("How many squares per side (1-100): ");
  }

  draw_grid(gridSize);
});

draw_grid(16);
