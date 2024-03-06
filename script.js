const btnAdd = document.querySelector(".btn-add");
const input = document.querySelector(".input");
const list = document.querySelector("ul");

function addInput(event) {
  event.preventDefault();
  const newTask = document.createElement("li");
  const taskText = document.createTextNode(input.value);
  if (input.value.trim() !== "") {
    newTask.appendChild(taskText);
    list.appendChild(newTask);
  }
  input.value = "";
}

btnAdd.addEventListener("click", addInput);
