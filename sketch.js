var num = 0;
var array = [1, 2, 3, 4, 5];

function setup() {
createCanvas(500,800);

  
}

function draw() {
background(255);
fill(150, 50, 120);
textSize(100);
text(array[num], 100, 100);
}

function mousePressed() {
num = num + 1;

if(num > 4) {
num = 0;
}
}