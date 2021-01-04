
let x, y;

function setup() {
  createCanvas(720, 400);

  x = width / 2;
  y = height;
}

function draw() {
  background(200);
  
  stroke(50);
  fill(100);
  ellipse(x, y, 24, 24);

  x = x + 1;
  x %= 720;
  y = y - 1;
  
  if (y < 0) {
    y = height;
  }
}

