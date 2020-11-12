let start = 0.0;
let xoffset ;

function setup(){

  createCanvas(windowWidth,windowHeight);

}

function draw(){

background(180);
// setting xoffset = start so it doesnt always start at 1.
xoffset=start;
for( let i= 0; i<width; i=i+10){

  let j = noise(xoffset) *height;
  noFill();
  //drawing circles at i and j offset posistion
  circle(i,j,200);
//increment of xoffset by 0.003
  xoffset = xoffset +0.003;
}
//increment of start by 0.003
start = start+0.003;
}
