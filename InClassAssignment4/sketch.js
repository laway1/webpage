let xposlist = [700,800,250,300,1000];
let yposlist = [400,900,300,100,200];
let yspeedlist = [15,10,30,20,45];
let xspeedlist = [15,10,30,20,45];
function setup() {
createCanvas(windowWidth,windowHeight);


}

function draw() {

  background(0,0,255);

for( let i= 0; i < xposlist.length; i= i+1){

  circle(xposlist[i],yposlist[i],100);

  yposlist[i] = yposlist[i] + yspeedlist[i];
  xposlist[i] = xposlist[i] + xspeedlist[i];

  if(yposlist[i] > height){
    yspeedlist[i] = -yspeedlist[i];
  }

  if(yposlist[i] < 0){
    yspeedlist[i] = -yspeedlist[i];
  }

  if(xposlist[i] > width){
    xspeedlist[i] = -xspeedlist[i];
  }

  if(xposlist[i] < 0){
    xspeedlist[i] = -xspeedlist[i];
  }

}



}
