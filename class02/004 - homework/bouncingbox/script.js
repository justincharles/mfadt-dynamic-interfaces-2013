var box = document.getElementById("box");

var x = 0;
var y = 0;
var xSpeed = 5;
var ySpeed = 1;

function update() {
  x = x + xSpeed; 
  box.style.marginLeft = x + "px";
  y = y + ySpeed;
  box.style.marginTop = y + "px";
}

var bigbox = document.getElementById("bigbox");
var width = document.getElementById("bigbox").offsetWidth;
var height = document.getElementById("bigbox").offsetHeight;
var x = x + xSpeed;
var y = y + ySpeed;

function reUpdate() {
  if (x > (width - 28))
    xSpeed = xSpeed * -1;
  else if (x < 1)
    xSpeed = xSpeed * -1;
  if (y > (height - 28))
    ySpeed = ySpeed * -1;  
  else if (y < 1)
    ySpeed = ySpeed * -1;
}

setInterval(update,1000/100);
setInterval(reUpdate,1000/100);