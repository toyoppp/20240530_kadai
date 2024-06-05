

let taskList = [];

const tasks = localStorage.getItem("todoText");
console.log(taskList);

if (taskList.length > 0) {
    taskList = JSON.parse(tasks);

    for (let i = 0; i < taskList.length; i++) {
        $("#todoList").append(`<li>${taskList[i]}</li>`);
    }
}

$("#addTodoBtn").on("click", function () {

    const todoText = $("#todoText").val();

    taskList.push(todoText);
    $("#todoList").append(`<li>${todoText}</li>`);

    localStorage.setItem("todoText", JSON.stringify(taskList));

    console.log(taskList);

    $("#todoText").val("");
});

$("#deleteTodoBtn").on("click", function () {

    localStorage.clear();

    $("#todoList").empty();

    taskList = [];
});
