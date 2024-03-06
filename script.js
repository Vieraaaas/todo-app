const btnAdd = document.querySelector(".btnAdd");
const input = document.querySelector(".input");
const list = document.querySelector("ul");

function addInput() {
  const newTask = document.createElement("li");
  const taskText = document.createTextNode(input.value);
  console.log(input.value);
  if (input.value.trim() !== "") {
    newTask.appendChild(taskText);
    list.appendChild(newTask);
  }
  input.value = "";
}

btnAdd.addEventListener("click", addInput);
