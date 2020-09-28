

function setup() {
createCanvas(windowWidth,windowHeight);
background(255);


let a = random(100,windowWidth);
let b = random(100,windowHeight);
let c = random(0,10);
let d = random(0,3);
stroke(0);
strokeWeight(20);
//Bottom Right
fill(0);
rect(0,b+(height-b)/2,a,(height-b)/2);

//Top left rect
fill(250,0,0);
rect(0,0,a,b);

//Top Right
fill(0,0,250);
rect(a+(windowWidth-a)/2,0,(windowWidth-a)/2,b);

//Bottom left
fill(250,250,0);

if(a > 500){
  rect(0,b,a/c,height);
}
else{
  rect(0,b,a*c,height);
}

//Bottom Middle
fill(0,250,0);

if(b > 500){
rect(a,b,(windowWidth-a)/2,height);
}
else{
rect(a,b,(windowWidth-a)/2,height);
}




}
function draw() {


}
