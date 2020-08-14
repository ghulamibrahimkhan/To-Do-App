// getting <ul> to insetr <li>
var list = document.getElementById("list")

// To do function
function addTodo() {
    // getting user input
    var toDoItem = document.getElementById("to-do-item")

    // creating <li> to put in <ul>
    var li = document.createElement("li")

    // user input value to insert in li
    var liText = document.createTextNode(toDoItem.value)

    // inserting user input in li
    li.appendChild(liText)

    // inserting <li> in to <ul>
    list.appendChild(li)


    // ******Edit Buton******


    var editButton = document.createElement("button")
    var editText = document.createTextNode("E d i t")
    editButton.appendChild(editText)
    li.appendChild(editButton)
    editButton.setAttribute("onclick", "editItem(this)")


    //    ****Delete Button****

    // creating delete button
    var deleteButton = document.createElement("button")
    // creating text of button
    var deleteText = document.createTextNode("Delete Task")
    // inserting text in button
    deleteButton.appendChild(deleteText)
    // inserting button in <li>
    li.appendChild(deleteButton)
    // setting attribute
    deleteButton.setAttribute("class", "button")
    //* passing whole button to the function "deleteTask" 
    deleteButton.setAttribute("onclick", "deleteTask(this)")
}


// *******Delete task function*********
// taking data on click from deleteButton 
function deleteTask(pass) {
    pass.parentNode.remove()
}



// **********Edit Task Function********
function editItem(edit) {

    var val = edit.parentNode.firstChild.nodeValue

    var editValue = prompt("Enter your task",val)

    edit.parentNode.firstChild.nodeValue = editValue;
}


// *****Delete All button
function deleteAll() {
    list.innerHTML = ""
}