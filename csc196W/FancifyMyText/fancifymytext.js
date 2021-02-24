function hello(){
    alert("Hello, world!");
}

function bigger(){
    document.getElementById('font').style.fontSize = "24pt";
}

function smaller(){
    document.getElementById('font').style.fontSize = "";        // back to original size
}

function moo(){
    document.getElementById('font').style.textTransform = "uppercase";
   
    document.getElementById('font').value += '-moo';
}

function woo(){
    document.getElementById('font').style.textTransform = "lowercase";

    document.getElementById('font').value += '-woo';
}

function undo(){
    document.getElementById('font').style.textTransform = "";   //revert sentence back to originally-typed case
}

function fancy(){
    
    document.getElementById('font').style.fontWeight = "900";
    document.getElementById('font').style.color = "blue";
    document.getElementById('font').style.textDecoration = "underline";
}

function boring(){
    
    document.getElementById('font').style.fontWeight = "";
    document.getElementById('font').style.color = "black";
    document.getElementById('font').style.textDecoration = "none";
}