const btnAdd = document.querySelector(".btnAdd");
const input = document.querySelector(".input");
const list = document.querySelector("ul");

function addInput() {
  const newTask = document.createElement("li");
  const taskText = document.createTextNode(input.value);
  newTask.appendChild(taskText);
  list.appendChild(newTask);
}

btnAdd.addEventListener("click", addInput);
