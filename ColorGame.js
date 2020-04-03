var colors = generateRandomColors(6);
function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
  //floor makes the no.integer and random generates a random number
}
function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  //get red from 0-255
  var r = Math.floor(Math.random() * 256);
  //get green from 0-255
  var g = Math.floor(Math.random() * 256);
  //get blue from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#newgame");
reset.addEventListener("click", function() {
  //generate all new colors
  colors = generateRandomColors(6);
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
});
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    // console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!!!";
      changeColor(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.classList.add("fadeout");
      messageDisplay.textContent = "Try Again!!";
    }
  });
}
