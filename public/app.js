// getting <ul> to insetr <li>
var list = document.getElementById("list")

// To do function
function addTodo(){
    // getting user input
   var toDoItem = document.getElementById("to-do-item")

    // creating <li> to put in <ul>
   var li = document.createElement("li")

    // user input value to insett in li
   var liText = document.createTextNode(toDoItem.value)

    // inserting user input in li
   li.appendChild(liText)
 
    // inserting <li> in to <ul>
    list.appendChild(li)


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
    deleteButton.setAttribute("class","button")
    //* passing whole button to the function "deleteTask" 
    deleteButton.setAttribute("onclick","deleteTask(this)")
}


// *******Delete task function*********
    // taking data on click from deleteButton 
function deleteTask(pass){
    pass.parentNode.remove()
}