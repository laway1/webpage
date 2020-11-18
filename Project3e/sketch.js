let sizeoffset =0.0;
let coloroffset = 0.0;
let xoffset =1.0;
let yoffset=1.0;
let zoffset=0.0;

let r;
let g;
let b;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(30);
}

function draw(){
  noStroke();
  // x, y and z offsets by the widht and height
  let lineX1 = noise(xoffset)*width;
  let lineY1 = noise(yoffset+10)*height;
  let lineX2 = noise(xoffset+20)*width;
  let lineY2 = noise(yoffset+30)*height;
  let lineZ1 = noise(zoffset+40)*width;
  let lineZ2 = noise(zoffset+60)*height;

// color offsets to each pixels
  let r = noise(coloroffset)*255;
  let g = noise(coloroffset +10)*255;
  let b = noise(coloroffset +20)*255;

 noFill();
 strokeWeight(1);
 stroke(r,g,b);
 // draw a line at each x,y and z offset cooridinates
  line (lineX1,lineY1,lineZ1,lineX2,lineY2,lineZ2);
  //incerments for xoffset, yoffset, zoffset and color offset values

  sizeoffset = sizeoffset + 0.9;
  coloroffset =coloroffset +0.1;
  xoffset = xoffset+0.01;
  yoffset =yoffset+0.02;
  zoffset=zoffset+0.03;
}
