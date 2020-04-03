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
  return "rgb(" + r + "," + g + "," + b + ")";
}

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      // alert("correct");
      messageDisplay.textContent = "Correct!!!";
      changeColor(clickedColor);
    } else {
      this.classList.add("fadeout");
      messageDisplay.textContent = "Try Again!!";
      // changeColor(clickedColor);
    }
  });
}
