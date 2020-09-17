let xpos= 50;
let ypos= 0;
let xballspeed= 10;
let yballspeed= 10;
//let x = random(windowWidth);
//let y = random(windowHeight);
function setup() {
createCanvas(windowWidth,windowHeight);

}

function draw() {
background(0,0,200);
noStroke();
fill(200,200,200);
circle (xpos,ypos,100);
xpos = xpos + xballspeed;
ypos = ypos + yballspeed;

// if check both x and y seperately

// for x position
//left side
if (xpos > windowWidth){
  xballspeed = -xballspeed;
}
//right side
if (xpos <0){
  xballspeed = -xballspeed;
}
//for y position
if (ypos > windowHeight){
  yballspeed = -yballspeed;
}
if (ypos <0){
  yballspeed = -yballspeed;
}
// clicked on the circle and appear at random location
if(mouseIsPressed & dist(mouseX,mouseY,xpos,ypos) <50){
  xpos = random(0,windowWidth);
  ypos = random(0,windowHeight);
}

}
