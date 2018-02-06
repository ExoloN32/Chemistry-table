var canvas = document.getElementById("graphic"), 
    context = canvas.getContext("2d");

var w = document.getElementById("cc").clientWidth;
var h = document.getElementById("cc").clientHeight;
canvas.width = w;

var x = 35, y = 35;
var xe = w - 70;
var ye = h - 70;

context.clearRect(0, 0, w, h);

context.strokeRect(50, 40, 100, 100);
context.fillRect(200, 40, 100, 100);

context.fillStyle = "#666666";
context.lineWidth = 1.0;
context.fillRect(x, y, xe, ye);