var colorArray = ["blue","red", "yellow","green"];

 

function somethingHappens() {
    var e = document.querySelector(".screen");
    // Returns a random integer from 0 to 10:
    i = Math.floor(Math.random() * 4);
    
    e.style.backgroundColor = colorArray[i];
}


function turnScreenBlue(){
    var e = document.querySelector(".screen");
    e.style.backgroundColor = "blue";
}

function showText(){
    var e = document.querySelector(".screen");
    e.innerHTML = "Show some text!";
}

function showButton(){
    var e = document.querySelector(".screen");
    e.innerHTML = `<button onclick="turnScreenBlue()">Turn Blue</button>`;
}

function clearScreen(){
    var e = document.querySelector(".screen");
    e.innerHTML = ``;
    e.style.backgroundColor = "white";
}

function addImage(){
    var e = document.querySelector(".screen");
    e.style.backgroundImage = "url('image.png')";
    e.style.backgroundSize = "cover";

}
function removeImage(){
    var e = document.querySelector(".screen");
    e.style.backgroundImage = null;
    e.style.backgroundColor = "white";
    

}

function reverseApp(str) {
    var e = document.querySelector(".screen");

var content = ` 
<label for="input">Your Word:</label><br>
<input type="text" id="input" name="input"><br><br>

<button type="button" onclick="reverseString()">Reverse String</button>


`       
e.innerHTML = content;
  
}

function reverseString() {
var str = document.getElementById("input").value;
var e = document.querySelector(".screen");
e.innerHTML = str.split("").reverse().join("");
}

var x = 5;
var y = 6;
var z  = x + y;


function doSomething() {
    var input1 = parseInt( document.getElementById("firstInput").value);
    var input2 = document.getElementById("secondInput").value;

  

    var output = ` First Input: ${input1}<br>
                   Second Input: ${input2}<br>`;

   
    
  document.getElementById("outputScreen").innerHTML = output;


}

function alertExample() {
    alert("Hello World");
}


function inputExample() {
    var name = prompt("What is your name?");
    alert("Hello " + name);
}

const context = new AudioContext()

document.getElementById("soundButton").addEventListener('click', () => {
  const oscillator = context.createOscillator()

  oscillator.frequency.value = 440
  oscillator.type = 'sine'
  oscillator.connect(context.destination)

  oscillator.start(context.currentTime)
  setTimeout(() => oscillator.stop(context.currentTime), 500)
})

function playNote(freq, length) {
    const oscillator = context.createOscillator()

oscillator.frequency.value = freq
oscillator.type = 'sine'
oscillator.connect(context.destination)

oscillator.start(context.currentTime)
setTimeout(() => oscillator.stop(context.currentTime), length)

}

var hovbutton = document.getElementById("hoverbut");
console.log(hovbutton);

// Set up an event handler. Notice that we don't use "on" in front
// of the event name when doing it this way.
hovbutton.addEventListener('mouseenter', addImage);





