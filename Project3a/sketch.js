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
// x and y positions offsets by the width and height
  let rectX = noise(xoffset)*width;
  let rectY = noise(yoffset)*height;
// r,b,g is set to different offsets
  let r = noise(coloroffset)*255;
  let g = noise(coloroffset +10)*255;
  let b = noise(coloroffset +20)*255;
  noFill();
  strokeWeight(1);
  stroke(r,g,b);
// 100 size rectangular drawn closest location of percious x and y offset locations
  rect(rectX, rectY, 100)

// increments of all the offset values.  
  sizeoffset = sizeoffset + 0.2;
  coloroffset =coloroffset +0.1;
  xoffset = xoffset+0.01;
  yoffset =yoffset+0.02;
}
