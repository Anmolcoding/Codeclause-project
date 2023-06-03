// Get the input field and task list
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    var task = taskInput.value;
    if (task !== "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(task));
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Event listener for the Enter key
taskInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTask();
    }
});
