

function setup() {
createCanvas(windowWidth,windowHeight);
background(255);
frameRate(30);

}

function draw() {

noStroke();
// changing the origin point of the circles and squres to the middle of the shape
ellipseMode(CENTER);
rectMode(CENTER);

// Creating random size circles every 1/6 of the width starting from (150,100) on a Grayscale, if mouseIsPressed create color circles bettwen (0-255)
//
for( let i = 150; i < width; i = i + width/6){
  for( let j = 100; j < height; j = j + height/6){
    let color = random(0,255);
    let rcolor = random(0,255);
    let gcolor = random(0,255);
    let bcolor = random(0,255);
    let z = random(0,100);
    // Left click funtion for changing colors.
    if(mouseIsPressed & mouseButton === LEFT){
      fill(rcolor,gcolor,bcolor);
    }
    else{
      fill(color);
    }
    ellipse(i,j, z, z);
}
}
// Press UP_Arrow for create new circles every 1/3 of the width starting from (351,180);
for( let i = 315; i < width; i = i + width/3){
  for ( let j = 180; j < height; j = j + height/3){
    let rcolor = random(0,255);
    let gcolor = random(0,255);
    let bcolor = random(0,255);
    let z = random(0,50);

    if(keyIsPressed & keyCode == UP_ARROW){
      ellipse(i,j,z,z);
    }
  }
}
// Press DOWN_Arrow for create new circles every 1/3 of the width starting from (630,335)
for( let i = 630; i < width; i = i + width/3){
  for ( let j = 335; j < height; j = j + height/3){
    let rcolor = random(0,255);
    let gcolor = random(0,255);
    let bcolor = random(0,255);
    let z = random(0,50);

    if(keyIsPressed & keyCode == DOWN_ARROW){
      ellipse(i,j,z,z);
    }
  }
}
// Press RIGHT_Arrow for create new squares every 1/3 of the width starting from (630,180)
for( let i = 630; i < width; i = i + width/3){
  for ( let j = 180; j < height; j = j + height/3){
    let rcolor = random(0,255);
    let gcolor = random(0,255);
    let bcolor = random(0,255);
    let z = random(0,50);

    if(keyIsPressed & keyCode == RIGHT_ARROW){
      rect(i,j,z,z);
    }
  }
}
// Press LEFT_Arrow for create new squares every 1/3 of the width starting from (315,335)
for( let i = 315; i < width; i = i + width/3){
  for ( let j = 335; j < height; j = j + height/3){
    let rcolor = random(0,255);
    let gcolor = random(0,255);
    let bcolor = random(0,255);
    let z = random(0,50);

    if(keyIsPressed & keyCode == LEFT_ARROW){
      rect(i,j,z,z);
    }
  }
}


}
