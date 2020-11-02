let white;
let yellow;
let daisy =[];
let rose;
let daisynumber =5;

let xpos;
let ypos;

let xpos3 = [];
let ypos3 =[];

let ranx;
let rany;
let yspeed=[];
let xspeed=[];
let randomnumber;

function preload() {

// loading images in from web
  yellow =  loadImage('https://i.imgur.com/yTKinLB.png');
  white =  loadImage('https://i.imgur.com/daUL4KM.png');
  rose = loadImage('https://i.imgur.com/32Ak9MY.png');

for ( let i =0; i<5; i= i+1){
  daisy[i] = loadImage('https://i.imgur.com/8W8u1KH.png');

}

}


function setup () {
  createCanvas(windowWidth, windowHeight);
  background(0);
  imageMode(CENTER);

      ranx = random(700,1600);
      rany = random(300,800);

      ypos = random(200,800);
      xpos = random(600,1000);

// random location and speed for daisy
      for (let i=0; i <daisynumber; i=i+1){
        ypos3[i]= random(0,height);
        xpos3[i]= random(0,width);
        yspeed[i]= random(3,10);
        xspeed[i]= random(3,10);
      }
// random number between 0-2 for blend
      randomnumber = random(0,2);

}

function draw(){

// background flower
  image(white,xpos,ypos);

  // silver rose by replacing green and blue pixels
  rose.loadPixels();
    for ( let x = 0; x< rose.width; x= x+1){
  for( let y = 0; y<rose.height; y =y+1){
    let i = ( x + y * rose.width) * 4 ;
    let pixr = rose.pixels[i+0];
    let pixg = rose.pixels[i+1];
    let pixb = rose.pixels[i+2];
    let pixa = rose.pixels[i+3];

    rose.pixels[i+2] = pixr;
    rose.pixels[i+1] = pixr;

}
}
  rose.updatePixels();
  image(rose,500,500);

// dairy flowers are floating around in and out of both normal and blend image area on the sketch.
for( let i=0; i<daisynumber; i=i+1){

  image(daisy[i],xpos3[i],ypos3[i],200,200);
  ypos3[i]= ypos3[i]+ yspeed[i];
  xpos3[i]= xpos3[i]+xspeed[i];

  if(xpos3[i] > width){
    xspeed[i] = - xspeed[i];
  }
  if( xpos3[i] < 0){
    xspeed[i]= - xspeed[i];
  }
  if(ypos3[i] > height){
    yspeed[i] = - yspeed[i];
  }
  if( ypos3[i] < 0){
    yspeed[i]= - yspeed[i];
  }
}

// creating vertical or horizontal blend areas depending on the randomnumber between 0-2
if ( randomnumber > 1){
  image(yellow,ranx,rany,1500 ,1500);
blend(0, 0, 2000, 2000, width/2, 0, 3000, 3000, DIFFERENCE);
}
if ( randomnumber < 1){
  image(yellow,ranx,rany,1500 ,1500);
blend(0, 0, 2000, 2000, 0, height/2, 3000, 3000, DIFFERENCE);
}



}
