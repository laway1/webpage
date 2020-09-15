let xpos= 50;
let ypos= 0;
let xballspeed= 10;
let yballspeed= 10;

function setup() {
createCanvas(windowWidth,windowHeight);


}

function draw() {
background(xpos,ypos,200);
fill(xpos,ypos,200);
ellipse (xpos,ypos,100,80);
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
}
