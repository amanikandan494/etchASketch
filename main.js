const containerDiv = document.querySelector(".container");
const resizeBtn = document.querySelector(".resize-btn");
let numPerSide = 16;
function getRandomColorVal() {
  return [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ];
}
function resizeGrid(numPerSide) {
  const containerForGrid = document.createElement("div");
  containerForGrid.setAttribute("class", "container-grid");
  for (let i = 0; i < numPerSide; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row-box");
    for (let j = 0; j < numPerSide; j++) {
      const colDiv = document.createElement("div");
      colDiv.setAttribute("class", "col-box");

      if (j < numPerSide - 1) {
        colDiv.classList.add("col-box-right");
      }
      if (i < numPerSide - 1) {
        colDiv.classList.add("col-box-bottom");
      }
      let bgInitialOpacity = 0;
      rowDiv.appendChild(colDiv);
      colDiv.addEventListener("mouseenter", (e) => {
        const [red, green, blue] = getRandomColorVal();
        colDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        bgInitialOpacity += 0.1;
        colDiv.style.opacity = `${bgInitialOpacity}`;
      });
    }
    containerForGrid.appendChild(rowDiv);
  }
  return containerForGrid;
}
const containerForGrid = resizeGrid(numPerSide);
containerDiv.appendChild(containerForGrid);
resizeBtn.addEventListener("click", (e) => {
  let n = prompt(
    "Enter the number of squares per side needed for the new grid,the entry should be a number between 1 and 100"
  );
  console.log("result:", containerForGrid);
  if (n > 0 && n <= 100) {
    document.querySelector(".container-grid").remove();
    const gridContainer = resizeGrid(n);
    containerDiv.appendChild(gridContainer);
  } else {
    alert("Wrong entry");
  }
});
