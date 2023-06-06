window.addEventListener("load", function () {
    var form = document.querySelector("#new-task-form");
    var input = document.querySelector("#new-task-input");
    var list_el = document.querySelector("#tasks");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var task = input.value;


        if (!task) {
            alert("Please fill in the task.");
            return;
        }

        var task_el = document.createElement("div");
        task_el.classList.add("task");

        var task_content_el = document.createElement("div");
        task_content_el.classList.add("content");


        var task_input = document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value = task;
        task_input.setAttribute("readonly", "readonly");
        task_content_el.appendChild(task_input);
        task_el.appendChild(task_content_el);


        var task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");
        var button_el1 = document.createElement("button");
        button_el1.classList.add("edit");
        button_el1.innerText = "Edit";
        var button_el2 = document.createElement("button");
        button_el2.classList.add("Delete");
        button_el2.innerText = "Delete";
        task_action_el.append(button_el1);
        task_action_el.append(button_el2);
        task_el.appendChild(task_action_el);


        list_el.appendChild(task_el);

        input.value = "";

        button_el1.addEventListener("click", function () {
            if (button_el1.innerHTML.toLowerCase() == "edit") {
                button_el1.innerHTML = "Save";
                task_input.removeAttribute("readonly");
                task_input.focus();
            }
            else {
                task_input.setAttribute("readonly", "readonly");
                button_el1.innerHTML = "Edit";
            }
        })

        button_el2.addEventListener("click", function () {
            task_el.remove();
        })



    })



})