const btnAdd = document.querySelector(".btn-add");
const input = document.querySelector(".input");
const list = document.querySelector("ul");
const tasks = [];
const storage = JSON.parse(localStorage.getItem("tasks"));

if (storage !== null) {
  for (storedTask of storage) {
    tasks.push(storedTask);
  }
}

for (task of tasks) {
  const newItem = document.createElement("li");
  const itemText = document.createTextNode(task.description);
  newItem.appendChild(itemText);
  list.appendChild(newItem);
}

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
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  input.value = "";
}

btnAdd.addEventListener("click", addInput);
