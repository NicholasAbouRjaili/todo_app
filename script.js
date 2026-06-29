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

    // ----------------------------
    // Create task counter
    // ----------------------------
    const taskCounter = document.createElement("p");
    taskList.parentNode.insertBefore(taskCounter, taskList);

    // ----------------------------
    // Create Show Deleted Tasks button
    // ----------------------------
    const showDeletedBtn = document.createElement("button");
    showDeletedBtn.textContent = "Show Deleted Tasks";
    showDeletedBtn.style.display = "none";

    // ----------------------------
    // Create hidden deleted task list
    // ----------------------------
    const deletedTaskList = document.createElement("ul");
    deletedTaskList.style.display = "none";

    // Add them to the page
    taskList.parentNode.appendChild(showDeletedBtn);
    taskList.parentNode.appendChild(deletedTaskList);

    // ----------------------------
    // Update task counter
    // ----------------------------
    function updateTaskCount() {
        const taskCount = taskList.children.length;

        if (taskCount === 0) {
            taskCounter.textContent = "No tasks yet";
        } else if (taskCount === 1) {
            taskCounter.textContent = "1 task to do";
        } else {
            taskCounter.textContent = `${taskCount} tasks to do`;
        }
    }

    // Display the current number of tasks
    updateTaskCount();

    // ----------------------------
    // Add a new task
    // ----------------------------
    function addTask() {

        const taskText = taskInput.value.trim();

        if (taskText === "") return;

        // Create list item
        const li = document.createElement("li");

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        // Complete task
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                taskSpan.style.textDecoration = "line-through";
                taskSpan.style.color = "green";
            } else {
                taskSpan.style.textDecoration = "none";
                taskSpan.style.color = "";
            }
        });

        // Delete task
        deleteBtn.addEventListener("click", function () {

            // Store deleted task
            const deletedLi = document.createElement("li");
            deletedLi.textContent = taskSpan.textContent;
            deletedTaskList.appendChild(deletedLi);

            // Show deleted task button
            showDeletedBtn.style.display = "inline-block";

            // Remove from main list
            li.remove();

            // Update counter
            updateTaskCount();
        });

        // Build task
        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        // Add to task list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";

        // Update counter
        updateTaskCount();
    }

    // ----------------------------
    // Toggle deleted task list
    // ----------------------------
    showDeletedBtn.addEventListener("click", function () {

        if (deletedTaskList.style.display === "none") {
            deletedTaskList.style.display = "block";
            showDeletedBtn.textContent = "Hide Deleted Tasks";
        } else {
            deletedTaskList.style.display = "none";
            showDeletedBtn.textContent = "Show Deleted Tasks";
        }

    });

    // ----------------------------
    // Button click
    // ----------------------------
    addBtn.addEventListener("click", addTask);

    // ----------------------------
    // Press Enter
    // ----------------------------
    taskInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

    console.log("script.js loaded and ready");

});