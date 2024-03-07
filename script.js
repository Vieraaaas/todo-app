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
  renderTask(task.description);
}

function renderTask(taskText) {
  const newItem = document.createElement("li");
  const itemText = document.createTextNode(taskText);
  newItem.appendChild(itemText);
  list.appendChild(newItem);
}

function addInput(event) {
  event.preventDefault();

  if (
    tasks.some(function (task) {
      return task.description.toLowerCase() === input.value.toLowerCase();
    })
  ) {
    alert("That is already on your list!");
    return;
  }
  if (input.value.trim() !== "") {
    let newTask = {
      description: input.value,
      id: Date.now() + Math.random(),
    };
    renderTask(input.value);
    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  input.value = "";
}

btnAdd.addEventListener("click", addInput);
