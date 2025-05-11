
// This is a simple JavaScript file that logs "Hello, World!" to the console.
// It can be used to test if the JavaScript environment is set up correctly.
// You can add more complex JavaScript code here as needed.
// For example, you can create functions, manipulate the DOM, or make API calls.
// Here's a simple function that adds two numbers and logs the result
// You can call the function and log the result
 // This will log 5 to the console
// You can also create event listeners to respond to user interactions
//? let x=document.querySelector("h2");
// ?x.style.color="red";
// ?x.style.fontFamily="Gill Sans";
// ?let y=document.querySelector("h1");
// ?y.style.backgroundColor="red";
// ?y.innerHTML="good morning";
// ?setTimeout(function(){
// ?    y.innerHTML="good night";
// ?}
// ?, 2000);
// For example, you can add a click event listener to a button
// document.querySelector("button").addEventListener("click", function() {
//     console.log("Button clicked!");
// });  
// You can also use JavaScript to manipulate the DOM
//?event listeners means that you can add a function to an element that will run when the event occurs
// ?For example, you can change the text of an element when a button is clicked
let x=document.getElementById("ele1");
x.addEventListener("click", function() {
    x.style.color="yellow";
    x.style.backgroundColor="red";
});
x.addEventListener("mouseleave", function() {
    x.style.color="black";
    x.style.backgroundColor="white";
});
let y=document.getElementById("ele2");
y.addEventListener("mousemove", function() {
    y.style.color="white";
    y.style.backgroundColor="orange";
});
y.addEventListener("mouseleave", function() {
    y.style.color="black";
    y.style.backgroundColor="white";
});
let z=document.getElementById("ele3");
y.addEventListener("click", function() {
    z.style.color="white";
    z.style.backgroundColor="purple";
});
z.addEventListener("click", function() {
    x.style.color="white";
    x.style.backgroundColor="green";
    x.innerHTML="Bulbasur";
});

