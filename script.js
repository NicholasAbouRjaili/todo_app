document.addEventListener("DOMContentLoaded", function () {
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (!addBtn || !taskInput || !taskList) {
        console.error("Required DOM elements not found", { addBtn, taskInput, taskList });
        return;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        checkbox.addEventListener("change", function () {
            taskSpan.style.textDecoration = checkbox.checked ? "line-through" : "none";
        });

        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskInput.value = "";
    }

    addBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") addTask();
    });

    console.log("script.js loaded and ready");
});