// data is displayed via
// alert()
alert("My message here");
// prompt() similar to alert, wants input
prompt("What is your name?");
// document.write() write to the page permanently
// can overwrite other things, easily midused
document.write("Time to learn Javascript"); 
// innerHTML, no parentheses but =
element.innerHTML = "Time to learn Javascript";
document.getElementById('test').innerHTML="Hello world";
// won't show on screen, but write to console(Chrome-developer tool-javascript)
console.log("Leave a secret message.");

// variables
var name = prompt("What is your name?");
document.write(name)';
// js built-in function Date()
var date = Date();
document.write(date);
var location = window.location;
document.write(location);
// data types
var name = prompt("What is your name?");
var name = Date();
var name = window.location;
// number
var width = window.innerWidth;
var pi = 3.14;
// string,"" ''
var location = window.location;
var name = "Bryna";
// boolean
var status = false;
var windowStatus = window.closed;
// object, a node in the DOM
// nodes are more than a single value, they have attributes
var topic = document.getElementById('myID');
// array, access by index
var links = document.getElementsByTagName('a');
document.write(links[0]);
// concatenation
// boolean operators, assume x=12
// x=="12" will return true
// === is equal with type, !== not equal with type
x === "12"
x!== 12
// true true false 
(15>x) && (x>5)
(15>x)||(x<5)
!(x==12)

 


