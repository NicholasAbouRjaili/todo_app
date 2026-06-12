// Wait until the HTML page is fully loaded before running the code
document.addEventListener("DOMContentLoaded", function () {

    // Get reference to HTML elements
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Make sure all required elements exist
    if (!addBtn || !taskInput || !taskList) {
        console.error("Required DOM elements not found", { addBtn, taskInput, taskList });
        return;
    }

    // Function to create and add a new task
    function addTask() {

        // Get the text from the input and remove extra spaces
        const taskText = taskInput.value.trim();

        // Don't add empty tasks
        if (taskText === "") return;

        // Create new list item
        const li = document.createElement("li");

        // Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Create span to hold the task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        // Cross out the task when the checkbox is checked
        checkbox.addEventListener("change", function () {
            taskSpan.style.textDecoration =
                checkbox.checked ? "line-through" : "none";
        });

        // Remove the task when the X button is clicked
        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        // Add the checkbox, text, and button to the list item
        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        // Add the list item to the task list
        taskList.appendChild(li);

        // Clear the input box after adding the task
        taskInput.value = "";
    }

    // Add a task when the Add button is clicked
    addBtn.addEventListener("click", addTask);

    // Add a task when Enter is pressed inside the input field
    taskInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

    // Confirmation message in the browser console
    console.log("script.js loaded and ready");
});
