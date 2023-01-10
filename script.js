let addTask = document.querySelector(".input__add");
let addButton = document.querySelector(".button_add");
let ul = document.querySelector(".task-list");
let clearButton = document.querySelector(".button_clear");
let deleteIcon = document.querySelectorAll(".delete-icon ");
let message = ul.querySelector(".message");

let todoList = [];

addButton.addEventListener("click", function () {
  showMessages(addTask.value);
});

ul.addEventListener("click", function (e) {
  if (e.target.className == "delete-icon") {
    deleteTask(e);
  } else {
    changeLabelTextStyle(e);
  }
});

clearButton.addEventListener("click", function () {
  let items = ul.querySelectorAll(".task");
  Array.from(items).map((el) => {
    el.remove();
  });
});

function changeLabelTextStyle(e) {
  const task = e.target.parentNode.nextElementSibling;
  if (e.target.checked) {
    task.style.textDecoration = "line-through";
  } else {
    task.style.textDecoration = "none";
  }
}

function deleteTask(e) {
  e.target.parentNode.remove();
}

function showMessages(task) {
  let li = document.createElement("li");
  li.className = "task";
  ul.appendChild(li);

  let label = document.createElement("label");
  li.appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.className = "task-input";
  label.appendChild(input);

  let inputLabel = document.createElement("span");
  inputLabel.className = "check-span";
  label.appendChild(inputLabel);

  let span = document.createElement("span");
  span.className = "message";
  span.textContent = task;
  li.appendChild(span);

  let button = document.createElement("button");
  button.className = "delete-icon";
  li.appendChild(button);
}
