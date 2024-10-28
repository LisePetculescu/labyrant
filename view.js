window.addEventListener("load", start);

// husk algoritme A* til senere

import model from "./model.js";

function start() {
  console.log("start");

  console.log(model);

  createGrid();
}

function createGrid() {
  const mazeObj = model();
  const container = document.querySelector("#labyrint-div");

  for (const row of mazeObj.maze) {
    console.log("row ", row);

    for (const cell of row) {
      console.log("cell ", cell);

      const node = document.createElement("div");
      node.classList.add("cell");
      for (const key in cell) {
        if (cell[key] && key != "row" && key != "col") {
          node.classList.add(key);
        }
      }

      container.appendChild(node);
    }
  }
}
