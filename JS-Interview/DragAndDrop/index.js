 

const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", function () {
    this.classList.add("dragging");
  });
  draggable.addEventListener("dragend", function () {
    this.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", function () {
    const draggedElement = document.querySelector(".dragging");
    this.appendChild(draggedElement);
  });
});


 