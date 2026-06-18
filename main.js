let input = document.getElementById("input-text");
let addbtn = document.getElementById("add-btn");

let add_task_container = document.getElementById("added-tasks");
let deleted_task_container = document.getElementById("deleted-tasks");

let taskList = document.getElementById("task-list");
let completedList = document.getElementById("completed-list");

addbtn.addEventListener("click", function () {

    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    add_task_container.classList.remove("d-none");

    let taskRow = document.createElement("div");
    taskRow.classList.add("task-row");

    taskRow.innerHTML = `
        <div class="task-left">
            <input type="checkbox" class="checkbox">
            <p class="ms-3 mb-0">${taskText}</p>
        </div>

        <i class="fa-solid fa-trash icon"></i>
    `;

    taskList.appendChild(taskRow);

    let deleteIcon = taskRow.querySelector(".icon");

    deleteIcon.addEventListener("click", function () {

        deleted_task_container.classList.remove("d-none");

        let completedTask = document.createElement("div");

        completedTask.classList.add(
            "task-row",
            "deleted-text"
        );

        completedTask.innerHTML = `
            <div class="task-left">
                <input type="checkbox" checked disabled class="checkbox">
                <p class="ms-3 mb-0">${taskText}</p>
            </div>
        `;

        completedList.appendChild(completedTask);

        taskRow.remove();
    });

    input.value = "";
});