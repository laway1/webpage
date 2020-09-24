

function setup() {
createCanvas(windowWidth,windowHeight);
background(0,0,0);
let rcol = random(0,255);
let gcol = random(0,255);
let bcol = random(0,255);
stroke(rcol,gcol,bcol);

}

function draw() {

  for ( let i = 0; i < width; i = i + 30) {
    for (let j = 0; j< height; j = j + 30){
    circle(i,j,50);

      }

}
let xpos = 0;
for (let i = height; i > 0; i = i- 10){
  xpos= xpos + 10;
  line(0,i,xpos,0);

}

let ypos = 0;
for (let j = width; j > 0; j = j - 10){
  ypos = ypos +10;
  line(j,0,-200,ypos);
}

let zpos=0;
for (let k = height; k > 0; k =k -30){
  zpos = zpos +10;
  line(0,k,zpos,0);
}


for( let i = 0; i< height; i = i+1){
  let xlen = random (0,width);
  line(0,i,xlen,i)
}
}
