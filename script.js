// Wait until the HTML page is fully loaded before running the code
document.addEventListener("DOMContentLoaded", function () {

    // Get reference to HTML elements
    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Make sure all required elements exist
    if (!addBtn || !taskInput || !taskList) {
        console.error("Required DOM elements not found", {
            addBtn,
            taskInput,
            taskList
        });
        return;
    }

    // Function to display the current number of tasks
    function updateTaskCount() {
        const taskCount = taskList.children.length;

        if (taskCount === 0) {
            console.log("No tasks yet");
        } else if (taskCount === 1) {
            console.log("1 task to do");
        } else {
            console.log(`${taskCount} tasks to do`);
        }
    }

    // Show task count when the page loads
    updateTaskCount();

    // Function to create and add a new task
    function addTask() {

        // Get the text from the input and remove extra spaces
        const taskText = taskInput.value.trim();

        // Don't add empty tasks
        if (taskText === "") return;

        // Create a new list item
        const li = document.createElement("li");

        // Create a checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Create a span to hold the task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Create a delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        // Highlight the task in green when checked
        checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskSpan.style.textDecoration = "line-through";
            taskSpan.style.color = "lightgreen";
        } else {
            taskSpan.style.textDecoration = "none";
            taskSpan.style.color = "";
        }});
    

        // Delete the task when X is clicked
        deleteBtn.addEventListener("click", function () {
            li.remove();
            updateTaskCount();
        });
        if (checkbox.checked) {
            taskSpan.style.textDecoration = "line-through";
        } else {
            taskSpan.style.textDecoration = "none";
        }

        // Add elements to the list item
        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        // Add the task to the list
        taskList.appendChild(li);

        // Clear the input
        taskInput.value = "";

        // Update task count
        updateTaskCount();
    }

    // Add task when button is clicked
    addBtn.addEventListener("click", addTask);

    // Add task when Enter is pressed
    taskInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

    console.log("script.js loaded and ready");
});