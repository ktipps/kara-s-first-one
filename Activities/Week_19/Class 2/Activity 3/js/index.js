// Create event listener to enter items below
$("#enter").on("click", function () {

    var task =$("#todoItem").val();

    console.log(task);

    $("todoList").append("<div class='task'>" + task + "<div class='x fas fa-times'></div></div>");
    
})
// Create event listener to delete items below

// Create event listener to toggle 
