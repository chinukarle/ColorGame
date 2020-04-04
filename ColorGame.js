var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
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
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function () {
  hard.classList.remove("selected");
  easy.classList.add("selected");
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      //if there is a color in array
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hard.addEventListener("click", function () {
  easy.classList.remove("selected");
  hard.classList.add("selected");
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].style.display = "block";
  }
});
reset.addEventListener("click", function () {
  //generate all new colors
  colors = generateRandomColors(numberOfSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to picked color
  colorDisplay.textContent = pickedColor;
  reset.textContent = "New Game";
  messageDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
});
colorDisplay.textContent = pickedColor;
colorDisplay.style.textTransform = "uppercase";
for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.background;
    // console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!!!";
      changeColor(clickedColor);
      h1.style.background = clickedColor;
      reset.textContent = "Play Again!";
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again!!";
    }
  });
}
