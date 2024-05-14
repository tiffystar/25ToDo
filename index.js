// console.log('My code is running');

//Allows user to hit "enter" instead of clicking button
document.getElementById("toDoInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("addButton").click();
    }
});

function addToDo() {
    // Get the input value
    var todoInput = document.getElementById("toDoInput").value;
    
    // Check if the input is empty
    if (todoInput === "") {
        // Alert the user or handle the empty input in some way
        alert("Please enter a valid to-do item.");
        return; // Exit the function early if input is empty
    }

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
    var archivedList = document.getElementById('archivedList');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            var listItem = checkbox.parentElement;
            listItem.removeChild(checkbox); // Remove the checkbox from the list item
            archivedList.appendChild(listItem); // Move the modified list item to the archived list
        }
    });
}
function deleteCheckedItems() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var itemsToRemove = [];

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            // Add the parent li element to the itemsToRemove array
            itemsToRemove.push(checkbox.parentElement);
        }
    });

    // Remove each item in the itemsToRemove array from the todoList
    itemsToRemove.forEach(function(item) {
        todoList.removeChild(item);
    });

    // Save the updated list to local storage after removing all selected items
    saveToDoList();
}