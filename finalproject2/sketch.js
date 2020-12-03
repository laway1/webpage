let x = [];
let y = [];
let angle = [];
let vel = [];
let w = [];
let num = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
 var randompx =0;
 var randompy=0;
  for (let i = 0; i < num; i++) {
    for ( let j = 0; j<50; j++){
      randompx += 1+random(width/(2/3));
    }
    for ( let j = 0; j<25; j++){
      randompy += 1+random(height/(2/3));
    }
    x[i] = width/2;
    y[i] = height/2;
    //random angles
    angle[i] = random(360);
    // random speed between 1 - 5
    vel[i] = random(1,5);
    if (random(100) < 50) {
      vel[i] = vel[i] * -1;
    }
    // random size of the ellipse
    w[i] = random(20, 40);
  }
}

function draw() {
  background(0, 0, 10,5);
  move();
  display();
}


function move() {
  for (let i = 0; i < x.length; i++) {
    //determine the angle of the direction of each ellipse
    let sx = cos(angle[i]) * vel[i];
    let sy = sin(angle[i]) * vel[i];
    //move in the direction determine by above
    x[i] = x[i] + sx;
    y[i] = y[i] + sy;

    //noise for changing the direction of each ellipse in natural movement
    let n = noise(x[i]/100, y[i]/300);

    //new array of angles
    angle[i] += map(n, 0, 1, -15, 15);

    if (x[i] < 0){
       x[i] = x[i]+ width;
    }
    if (x[i] > width){
      x[i] = x[i] - width;
    }
    if (y[i] < 0){
      y[i] = y[i] + height;
    }
    if (y[i] > height){
      y[i] = y[i]- height;
    }

  }

}

function display() {
  for (let i = 0; i < x.length; i++) {
    fill(360,80,100);
    noStroke();
    ellipse(x[i], y[i], w[i]);
  }
}
