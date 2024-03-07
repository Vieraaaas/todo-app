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
  renderTask(task.description, task.id, task.done, task);
}

function renderTask(taskText, taskId, taskStatus, task) {
  const newItem = document.createElement("li");
  const itemText = document.createTextNode(taskText);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "task" + taskId;
  checkbox.checked = taskStatus;
  checkbox.taskObject = task;
  newItem.append(checkbox, itemText);
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
      done: false,
    };
    renderTask(newTask.description, newTask.id, newTask.done, newTask);
    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  input.value = "";
}

function toggleDone(event) {
  const checkbox = event.target.taskObject;
  checkbox.done = !checkbox.done;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

btnAdd.addEventListener("click", addInput);
list.addEventListener("change", toggleDone);
