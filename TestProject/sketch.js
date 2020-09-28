

function setup() {
createCanvas(windowWidth,windowHeight);
background(255);
frameRate(30);
}

function draw() {

noStroke();

for( let i = 0; i < width; i = i + 300){
  for( let j = 0; j < height; j = j + 300){
    let rcolor = random(0,255);
    let gcolor = random(0,255);
    let bcolor = random(0,255);
    let z = random(0,215);
    // Left click funtion for changing colors.
    if(mouseIsPressed & mouseButton === LEFT){
      fill(rcolor,gcolor,bcolor);
    }
    else{
      fill(color);
    }
    // Left arrow key function for moveing the cricles to the left by 10 units.
    if(keyIsPressed & keyCode === LEFT_ARROW){
      i = i+10;
      j= j+10;
    }
    // Right arrow key function for moveing the cricles to the right by 10 units.

    if(keyIsPressed & keyCode === RIGHT_ARROW){
      i = i-10;
      j= j-10;
    }
circle(i,j,z);
}
}
}
