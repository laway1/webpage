let xpos;
let ypos;
let yoffset =0.0;
let xoffset= 0.0;
let coloffset= 0.0;
let colr;
let colg;
let colb;


function setup(){

  createCanvas(windowWidth,windowHeight);
background(0,5);
}

function draw(){
noStroke();
// determining x and y values to the closest numbers
xpos = noise(xoffset)*width;
ypos = noise(yoffset)*height;
//smoothin color transistion to the closest color.
colr = noise(coloffset)* 255;
colb = noise(coloffset +10) * 255;
colg = noise(coloffset +20) * 255;


fill(colr,colg,colb);
circle(xpos, ypos, 100);
//incerments for xoffset, yoffsent and color offset values
xoffset = xoffset + 0.006;
yoffset = yoffset + 0.008;
coloffset = coloffset + 0.01;
}
