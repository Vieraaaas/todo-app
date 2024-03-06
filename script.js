const btnAdd = document.querySelector(".btn-add");
const input = document.querySelector(".input");
const list = document.querySelector("ul");
const tasks = [];

function addInput(event) {
  event.preventDefault();
  if (input.value.trim() !== "") {
    const newItem = document.createElement("li");
    const itemText = document.createTextNode(input.value);
    let newTask = {
      description: input.value,
      id: Date.now() + Math.random(),
    };
    tasks.push(newTask);
    newItem.appendChild(itemText);
    list.appendChild(newItem);
  }
  input.value = "";
}

btnAdd.addEventListener("click", addInput);
