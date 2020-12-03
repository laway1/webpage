
let angleA;
let angleB;
let d;
let coloroffset =0.0;
let r;
let g;
let b;
let alpha;
let piano;
let ringnumb = 100;
let maxring = 1000;

function preload(){
  piano = loadSound('https://laway1.github.io/webpage/Sound/always.mp3');
  piano.play();

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  //frameRate(10);
  alpha= 5;
}

function draw() {

  background(0);
  // create the translucent effect with the moving arcs
  blendMode(ADD);


  for (let i = 0; i < ringnumb; i = i + 100) {
    // remaping the angles values from -1,1 to 0-360*
    angleA = sin(i + frameCount/10);
    angleA = map(angleA, -1, 1, 0, 360);
    angleB = cos(i + frameCount/10);
    angleB = map(angleB, -1, 1, 360, 0);

    // value of the widht and remaping it from -1,1 to new range i/4,i
    d = sin(i + frameCount / 5) * cos(frameCount / 7 + i);
    d = map(d, -1, 1, i/4, i);
    // color offset for blue and grenen
    let b = noise(coloroffset)*255;
    let g = noise(coloroffset + 10)*180;
    stroke(0, g, b,alpha);
    strokeWeight(2);
    noFill();
    // draw arc from center of the canvas, start at angleA and stopping at angleB
    arc(width / 2, height / 2, d, d, angleA, angleB);
    if( ringnumb < maxring){
      ringnumb++;
    }

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
