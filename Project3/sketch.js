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
  let r = random(0,255);

  //xpos = random (0,width);
//  ypos = random (0, height);
 ypos =noise(yoffset)* height;
 xpos= noise(xoffset) * width;
 strokeWeight(3);
stroke(r,0,0);
noFill();
rect(xpos,ypos,100);
xoffset = xoffset + 0.01;
yoffset = yoffset + 0.02;
}
