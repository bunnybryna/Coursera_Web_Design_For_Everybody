function functionName(parameters){
    
}

function welcomeMsg(){
    alert("Welcome to JavaScript!");
}

function welcomeMsg(msg){
    alert(msg);
}

var x="Hello";
welcomeMsg(x);
x="Goodbye";
welcomeMsg(x);

// return values
function welcomeMsg(msg){
    alert(msg);
    var name = prompt("What is your name?");
    return name;
}
