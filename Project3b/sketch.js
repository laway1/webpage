let x1;
let x2;
let x3;

let y1;
let y2;
let y3;

let offset;
function setup(){

  createCanvas(windowWidth,windowHeight);
background(255);
stroke(0,50);
offset = 0.0;
noFill();
}

function draw(){
  x1 = noise(offset)*width;
  x2 = noise(offset+20)*width;
  x3 = noise(offset+30)*width;

  y1 = noise(offset+40)*height;
  y2 = noise(offset+50)*height;
  y3 = noise(offset+80)*height;

  triangle(x1, y1, x2, y2, x3, y3)
  offset=offset+0.01;
}
