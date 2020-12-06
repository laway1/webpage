let x = [];
let y = [];
let angle = [];
let vel = [];
let w = [];
let num = 50 ;
let anglenoise;
let angleoffset =[];
let roffset =0.0;
let r;
let b;
let boffset = 0.0;
let alpha=100;
let darkpiano;
function preload(){
  darkpiano = loadSound('https://laway1.github.io/webpage/finalproject2/DarkPiano.mp3');
  darkpiano.play();

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

 var randompx =0;
 var randompy= 0;
  for (let i = 0; i < num; i++) {
  // start at the center of the canvas
    x[i] = width/2;
    y[i] = height/2;
    //random angles
    angle[i] = random(360);
    // random speed between 1 - 3
    vel[i] = random(1,3);
    // determine going left or right with positive and negative velocity value
    if (random(100) < 50) {
      vel[i] = vel[i] * -1;
    }
    // random size of the ellipse
    w[i] = random(30, 40);
    angleoffset[i]= random(10,360);

  }

}

function draw() {

  background(255,255,255,10);
  blendMode(BURN);
  move();
  display();
  //right click, velocity change, alpha 20 and blendMode to dodge and lighenout the canvas
  if( mouseIsPressed & mouseButton === RIGHT){
    alpha=20;
  for (let i = 0; i < num; i++){
    vel[i]=2;
    if (random(100) < 50) {
      vel[i] = vel[i] * -1;
    }
  }
  blendMode(DODGE);
  }
  // left click, velocity change
  if( mouseIsPressed & mouseButton === LEFT){
    alpha=80;
  for (let i = 0; i < num; i++){
    vel[i]=4;
    if (random(100) < 50) {
      vel[i] = vel[i] * -1;
    }
  }
  }
}

function move() {
  for (let i = 0; i < x.length; i++) {
    //determine the directional angle of each ellipse
    let sx = cos(angle[i]) * vel[i];
    let sy = sin(angle[i]) * vel[i];
    //move in the direction determine by above
    x[i] = x[i] + sx;
    y[i] = y[i] + sy;
    //let noisemult = random (1,10);
    let anglenoise = noise(angleoffset[i])*360;
    angle[i] = anglenoise;
    angleoffset[i] = angleoffset[i] +0.0025;
    // when ellipse leaves the frame, rest to the other side of the frame
  if (x[i] < 0){
     x[i] = x[i]+ width;
  }
  if (x[i] > width){
    x[i] = x[i] - width;
  }
  if (y[i] < 0){
    y[i] = y[i] + height;
  }
  if (y[i] > height){
    y[i] = y[i]- height;
  }
  }

}

function display() {
  for (let i = 0; i < x.length; i++) {

    r = noise(roffset)*255;
    b = noise(boffset)*50;
    fill(r,0,b,alpha);
    noStroke();
    ellipse(x[i], y[i], w[i]);
    roffset = roffset + 0.0001;
    boffset = boffset +0.0001;
  }

}
function keyPressed(ENTER) {
  if ( darkpiano.isPlaying()) {
    darkpiano.pause();
  } else {
    darkpiano.play();
  }
}
