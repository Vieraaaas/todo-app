const btnAdd = document.querySelector(".btn-add");
const input = document.querySelector(".input");
const list = document.querySelector("ul");
const tasks = [];
const storage = JSON.parse(localStorage.getItem("tasks"));
const radioOpen = document.querySelector("#radio-open");
const radioDone = document.querySelector("#radio-done");
const radioAll = document.querySelector("#radio-all");
const btnRemove = document.querySelector(".btn-remove");

if (storage !== null) {
  for (const storedTask of storage) {
    tasks.push(storedTask);
  }
}

for (const task of tasks) {
  renderTask(task);
}

function renderTask(task) {
  const newItem = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "task" + task.id;
  checkbox.checked = task.done;
  checkbox.taskObject = task;
  label.htmlFor = checkbox.id;
  label.innerText = task.description;
  newItem.append(checkbox, label);
  list.appendChild(newItem);
}

function storeData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//filter tasks
function filter(status) {
  for (const task of tasks) {
    const listElement = document.querySelector(`#task${task.id}`);
    if (task.done === status) {
      listElement.parentNode.style.display = "none";
    } else {
      listElement.parentNode.style.display = "";
    }
  }
}
radioOpen.addEventListener("click", function () {
  filter(true);
});
radioDone.addEventListener("click", function () {
  filter(false);
});

// Add tasks
btnAdd.addEventListener("click", function (event) {
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
      id: Date.now(),
      done: false,
    };
    renderTask(newTask);
    tasks.push(newTask);

    storeData();
  }
  input.value = "";
});

// Toggle done = true/false
list.addEventListener("change", function (event) {
  const checkbox = event.target.taskObject;
  checkbox.done = !checkbox.done;
  storeData();
});

// Show all tasks
radioAll.addEventListener("click", function () {
  for (const task of tasks) {
    const listElement = document.querySelector(`#task${task.id}`);
    listElement.parentNode.style.display = "";
  }
});

// Remove finished tasks
btnRemove.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    confirm(
      "Are you sure you want to delete ALL finished tasks? No takesies-backsies!"
    ) === true
  ) {
    for (let i = tasks.length - 1; i >= 0; i--) {
      const task = tasks[i];
      const listElement = document.querySelector(`#task${task.id}`);
      if (task.done === true) {
        listElement.parentNode.remove();
        tasks.splice(i, 1);
        storeData();
      }
    }
  }
});
