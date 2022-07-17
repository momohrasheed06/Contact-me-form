var h1 = document.querySelector("h1");
document.querySelector("h1").classList.toggle("main-heading");

var p = document.querySelector("p");
document.querySelector("p").classList.toggle("reserve");

let button = document.querySelector('button');
button.addEventListener("mousemove", function(){
    console.log("Connect with Us")
});

var x = document.querySelector("button")
x.className="butty"

let change = document.getElementById('change');
change.addEventListener("click", function(){
    console.log("Change background")
    this.style="background:black";
});


// //Select 7 colors
// let colors = [ 'red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];


// //change the background color when button is clicked
// let button = document.getElementById('btn');

// btn.addEventListener('click', function(){
