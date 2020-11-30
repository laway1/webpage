
let x;
let y;
let angleA;
let angleB;
let d;
let coloroffset =0.0;
let r;
let g;
let b;
let a =10;
let piano;
let ringnumb = 300;
let maxring = 2000;

function preload(){
  piano = loadSound('https://laway1.github.io/webpage/Sound/always.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 100, 0);
  angleMode(DEGREES);
}

function draw() {

  background(0, 0, 0);
  blendMode(ADD);


  for (let r = 0; r < ringnumb; r = r + 100) {
    angleA = sin(r + frameCount);
    angleA = map(angleA, -1, 1, 0, 360);
    angleB = cos(r + frameCount/2);
    angleB = map(angleB, -1, 1, 360, 0);


    d = sin(r + frameCount / 2) * cos(frameCount / 7 + r);
    d = map(d, -1, 1, r/4, r);

    let b = noise(coloroffset)*255;
    let g = noise(coloroffset + 10)*200;
    stroke(0, g, b,a);
    strokeWeight(d/20);
    noFill();
    arc(width / 2, height / 2, d, d, angleA, angleB);
    if( ringnumb > maxring){
      ringnumb--;
    }
    else{
      ringnumb++;

    }
    if( ringnumb == maxring){

    }

  }

}
if(mouseIsPressed){
  always.play();
}
