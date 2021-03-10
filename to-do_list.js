function welcome() {
    const paragraph = document.createElement('p');
    paragraph.textContent = "Welcome to my site. \n\nHere, you can create your own to-do list by adding items and even deleting them."
                           + '\n\n' + "I am using DOM manipulation to write this message too!";
    alert(paragraph.textContent);
}

function add() {
    document.getElementById("addBtn").onclick  = function() {

        var node = document.createElement("Li");
        var text = document.getElementById("user_input").value; 
        var textnode=document.createTextNode(text);
        node.appendChild(textnode);
        document.getElementById("list_item").appendChild(node);
    }
}