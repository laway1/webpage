let xpos;
let ypos;
let xoffset = 1.0;
let yoffset  = 0.0;
let r ;



function setup(){

  createCanvas(windowWidth,windowHeight);
background(255);
frameRate(30);

}

function draw(){
// random shades of red color.
  let r = random(0,255);
// x & y location of the offest multiply by the width and height
 ypos =noise(yoffset) * height;
 xpos= noise(xoffset) * width;
 // no fill rectangulars with stroke weight 3.
strokeWeight(3);
stroke(r,0,0);
noFill();
// drawing retangulars at xpos & ypos
rect(xpos,ypos,100);
// increments of the offset values
xoffset = xoffset + 0.01;
yoffset = yoffset + 0.02;
}
