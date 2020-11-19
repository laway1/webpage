let sizeoffset =0.0;
let coloroffset = 0.0;
let xoffset =0.0;
let yoffset=0.0;

let r;
let g;
let b;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(32);
}

function draw(){
  noStroke();
  let circleX = noise(xoffset)*width;
  let circleY = noise(yoffset)*height;
  let circleSize = noise(sizeoffset)*200;;
  let r = noise(coloroffset)*255;
  let g = noise(coloroffset +10)*255;
  let b = noise(coloroffset +20)*255;
  fill(r, g, b);
// ellispe drawn at x & y offset locations and the size that was closest to the previous
  ellipse(circleX, circleY, circleSize)

  // offset increments for next loop
  sizeoffset = sizeoffset + 0.05;
  coloroffset =coloroffset +0.1;
  xoffset = xoffset+0.03;
  yoffset =yoffset+0.04;
}
