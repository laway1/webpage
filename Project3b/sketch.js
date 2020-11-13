let yoffset =0.0;
let xoffset =0.0;
let col1;
let col2;
let col3;

function setup(){

  createCanvas(windowWidth,windowHeight);
//noLoop();
}

function draw(){

background(180);

  for( let x=0; x< width; x=x+50){
    for( let y =0; y< height; y=y+50){
//smooth color chaning to the cloest shade of colors
      col1 = noise(xoffset,yoffset) * 255;
      col2 = noise(xoffset+10,yoffset+30) * 255;
      col3 = noise(xoffset+20,yoffset+40) * 255;
      noStroke();
      fill(col1,col2,col3);
      rect(x,y,40);
        xoffset =xoffset +0.00003;
    }
  yoffset =yoffset +0.00002;
  }

}
