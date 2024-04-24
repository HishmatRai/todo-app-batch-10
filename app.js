var container = document.getElementById("container");
// input
var input = document.createElement("input");
container.appendChild(input);
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Type .....");

// add button
var addBtn = document.createElement("button");
container.appendChild(addBtn);
addBtn.innerHTML = "Add";
addBtn.setAttribute("onClick", "addHandler()")

// message
var message = document.createElement("p");
container.appendChild(message);
message.setAttribute("id", "message")
// delete all
var deleteAll = document.createElement("button");
container.appendChild(deleteAll);
deleteAll.innerHTML = "Delete All";
deleteAll.setAttribute("id", "delete-all");
// deleteAll.setAttribute("onClick","deleteAll()")
// list
var ul = document.createElement("ul");
container.appendChild(ul);
// add function
function addHandler() {
    message.style.display = "block";
    if (input.value === "") {
        // alert("Type something....")
        message.innerHTML = "Type something....";
        message.style.color = "red";
        setTimeout(function () {
            // message.innerHTML = "";
            message.style.display = "none"
        }, 1000);
    } else {
        // console.log(input.value);
        // message.style.display = "block"
        message.innerHTML = "Success";
        message.style.color = "green";
        deleteAll.style.display = "block"
        // li 
        var li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = input.value;
        li.setAttribute('id', input.value)
        // delete button
        var deleteBtn = document.createElement("button");
        li.appendChild(deleteBtn);
        deleteBtn.innerHTML = "Delete";
        // edit button
        var editButton = document.createElement("button");
        li.appendChild(editButton);
        editButton.innerHTML = "Edit";


        // delete function
        deleteBtn.addEventListener("click", function () {
            deleteBtn.parentNode.remove()
        })

        // edit function
        editButton.addEventListener("click", function () {

            var editTodo = prompt("Edit todo", li.id);
            if (editTodo !== null && editTodo !== "") {

                li.innerHTML = editTodo;
                li.setAttribute("id",editTodo)
                li.appendChild(deleteBtn)
                li.appendChild(editButton)
            }
        })
        setTimeout(function () {
            // message.innerHTML = "";
            message.style.display = "none"
        }, 1000);
        input.value = ""
    }
}

// delete all
// function deleteAll() {
//     alert("delete all")
// }

// var addButton = document.getElementById("addButton");
// console.log(addButton)
// addButton.setAttribute("onClick","adfsdlfsdklfksdf()")
// function adfsdlfsdklfksdf(){
//     alert("Fsdfds")
// }
// addButton.addEventListener("click",function(){
//     alert("FSdfsdf")
// })


deleteAll.addEventListener("click", function () {
    ul.innerHTML = "";
    deleteAll.style.display = "none"
})

