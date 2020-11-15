let sizeoffset =0.0;
let coloroffset = 0.0;
let xoffset =1.0;
let yoffset=1.0;

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

  ellipse(circleX, circleY, circleSize)
  sizeoffset = sizeoffset + 0.2;
  coloroffset =coloroffset +0.1;
  xoffset = xoffset+0.01;
  yoffset =yoffset+0.02;
}
