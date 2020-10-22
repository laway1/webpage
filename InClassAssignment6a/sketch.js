let img;

function preload(){

  img = loadImage('https://i.imgur.com/sS4mtgc.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

}

function draw() {
  img.loadPixels();

  for(let x = 0; x< img.width/2; x = x+1){
    for(let y=0; y<img.height/2; y = y+1){
      let i = ( x +  y* img.width )* 4;

      let pixr = img.pixels[i+0];
      let pixg = img.pixels[i+1];
      let pixb = img.pixels[i+2];
      let pixa = img.pixels[i+3];

    if( pixr > 50){
      img.pixels[i+0]= 0;
    }

    }
  }

  for(let x = img.width/2; x< img.width; x = x+1){
    for(let y =img.height/2; y<img.height; y = y+1){
      let i = ( x +  y* img.width )* 4;

      let pixr = img.pixels[i+0];
      let pixg = img.pixels[i+1];
      let pixb = img.pixels[i+2];
      let pixa = img.pixels[i+3];

    img.pixels[i+2]= 0;

    }
  }
img.updatePixels();
image(img,0,0);

}
