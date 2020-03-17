//adding new tasks to the list
function addTask() {
    var newItem = document.getElementById("newInput").value;
    var node = document.createElement("LI");
    var text = document.createTextNode(newItem);
    node.appendChild(text);
    
    document.getElementById("newInput").style.border = "";
    
    if (newItem === "") {
        alert ("You need to enter a task!");
        document.getElementById("newInput").style = "border: 1px solid red"
    }
    
    else {
        document.getElementById("taskList").appendChild(node);
        
        //clearing the input field after button click
        document.getElementById("newInput").value = "";   
    }
    
    //creating the delete icon for the items
    var span = document.createElement("SPAN");
    var trash = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(trash);
    node.appendChild(span);
    
    //hiding the items when the x is clicked
    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
    }
    
    //creating the check mark for the items
    var span = document.createElement("SPAN");
    var done = document.createTextNode("\u2713");
    span.className = "check";
    span.appendChild(done);
    node.appendChild(span);
    
    //moving completed tasks to the completed list
    var check = document.getElementsByClassName("check");
    for (var j = 0; j < check.length; j++) {
    check[j].onclick = function() {
        var div = this.parentElement;
        document.getElementById("completedList").appendChild(div);
        
        //making the check symbol invisible once the item is moved
        this.style.display="none";
    }
    }

}


//waiting until the DOM is ready
document.addEventListener("DOMContentLoaded", function() { 
    
    //changing the styling of list items that are clicked
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
    
    //adding a task also works by pressing enter
    document.getElementById("newInput").onkeyup = function(e) {
    if(e.keyCode == 13) {
        addTask();
    }
}

})
