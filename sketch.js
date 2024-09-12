const container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.className = "box";
  square.id = "box" + i;
  container.append(square);
  addEventListener("mouseover", function (e) {
    const box = document.getElementById(e.target.id);
    if (box != null) {
      box.style.backgroundColor = "red";
    }
  });
}
