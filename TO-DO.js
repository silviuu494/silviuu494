var toDoList = [];

function submit() {
    var todoElement = document.getElementById("todo-item");

    if (todoElement.value) {
        toDoList.push({
            id: toDoList.length + 1,
            task: todoElement.value,
            createdAt: Date.now()
        });
    } else {
        console.log(false);
    }

    RefreshList(toDoList);
    todoElement.value = "";
}


function RefreshList(todoList) {
    var ul = document.getElementById("list");
    var listLength = ul.children.length;
    for (i = 0; i < listLength; i++) {
        ul.removeChild(ul.children[0]);
    }
    todoList.forEach((toDo, index) => {
        console.log(index);
        var li = document.createElement("li");
        var deleteBtn = document.createElement("BUTTON");
        deleteBtn.innerHTML = "X";

        deleteBtn.addEventListener("click", function () {
            DeleteTodo(index);
            console.log(index);
        });

        li.prepend(document.createTextNode((index + 1) + " - "));
        li.appendChild(document.createTextNode(toDo.task));
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    })
}

function DeleteTodo(index) {
    toDoList.splice(index, 1);
    RefreshList(toDoList);
}

function deleteFromArray() {
    var y = document.getElementById("myClearListButton");
    console.log("Cleared")
}