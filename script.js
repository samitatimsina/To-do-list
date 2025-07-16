document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const pendingList = document.getElementById("pendingList");
  const completedList = document.getElementById("completedList");

  // Add task on button click
  addButton.addEventListener("click", addTask);

  // Add task on Enter key
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    const li = document.createElement("li");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      moveTask(checkbox);
    });

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      li.remove();
    };

    // Build task item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add to pending list initially
    pendingList.appendChild(li);
    taskInput.value = "";
  }

  function moveTask(checkbox) {
    const li = checkbox.parentElement;
    if (checkbox.checked) {
      li.classList.add("completed");
      completedList.appendChild(li);
    } else {
      li.classList.remove("completed");
      pendingList.appendChild(li);
    }
  }
});
