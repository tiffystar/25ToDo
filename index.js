// console.log('My code is running');

function addToDo() {
    // Get the input value
    var todoInput = document.getElementById("toDoInput").value;
    
    // Create a new list item
    var li = document.createElement("li");
    
    // Create a new checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Append the checkbox to the list item
    li.appendChild(checkbox);

    // Create a text node for the todo input
    var textNode = document.createTextNode(todoInput);

    // Append the text node to the list item
    li.appendChild(textNode);
    
    // Append the new item to the todoList
    document.getElementById("todoList").appendChild(li);
    
    // Clear the input field
    document.getElementById("toDoInput").value = "";
}

function clearCheckedItems() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
             // Move the parent li element to the archived list
             archivedList.appendChild(checkbox.parentElement);
        }
    });
}
function deleteCheckedItems() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkbox.parentElement.remove(); // Remove the parent li element
            saveToDoList(); // Save the updated list to local storage
        }
    });
}