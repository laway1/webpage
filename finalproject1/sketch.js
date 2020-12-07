
let angleA;
let angleB;
let arclength;
let coloroffset =0.0;
let r;
let g;
let b;
let alpha;
let piano;
let maxring = 1000;

function preload(){
piano = loadSound('https://laway1.github.io/webpage/Sound/always.mp3');
piano.play();

}

function setup() {
createCanvas(windowWidth, windowHeight);

angleMode(DEGREES);
alpha= 5;
}

function draw() {
background(0,0,0);
// create the translucent effect with the moving arcs
blendMode(ADD);


for (let i = 0; i < maxring; i = i + 100) {

// starting Angle value of Sin(i) and changing each sktech it drawn and dviding by 10
  angleA = sin(i + frameCount/10);
  // remapping sin parameter value between -1,1 to  0 - 360 range
  angleA = map(angleA, -1, 1, 0, 360);
  // stopping Angle value of Cos(i), changing each skecth is drawn and dividing by 20
  angleB = cos(i+ frameCount/20);
  // remapping cos parameter value between -1,1 to  0 - 360 range
  angleB = map(angleB, -1,1, 360, 0);

  //determine the size of the arc by multiplying angleA & angleB
  arclength = sin(i+ frameCount/2) * cos(i+ frameCount/7);
//remapping the values of arclenght betwen -1,1 to i/4,i  that increment each time sketch is drawn
  arclength = map(arclength, -1, 1,i/4,i);

  let b = noise(coloroffset)*255;
  let g = noise(coloroffset + 10)*180;
  stroke(0, g, b,alpha);
  strokeWeight(2);
  noFill();
  // draw arc from center of the canvas, start at angleA and stopping at angleB
  arc(width / 2, height / 2, arclength, arclength, angleA, angleB);

}
coloroffset = coloroffset+0.02;

}
//play the paino bgm, when mouse it clicked
function mousePressed(){
if(piano.isPlaying()){
  piano.pause();
}
else{
  piano.play();
}
}
