let greenlist = [];
let orangelist= [];

let gexposlist= [];
let geyposlist= [];

let ogxposlist= [];
let ogyposlist= [];

let yspeed = [];

let numbofgreen= 10;
let numboforange= 10;

function preload(){

for (let  i = 0; i<numbofgreen; i= i+1){

    greenlist[i]= loadImage('https://i.imgur.com/weA7yBr.png');
    orangelist[i]= loadImage('https://i.imgur.com/boOgy03.png');

}

}



function setup() {

createCanvas(windowWidth,windowHeight);

for(let i=0; i<numbofgreen; i =i+1){

    geyposlist[i]=0;
    gexposlist[i]=random(0,width);
    yspeed[i]=random(2,8);
  }

for(let j=0; j<numboforange; j=j+1){
  ogyposlist[j]=0;
  ogxposlist[j]=random(0,width);
  yspeed[j]=random(3,10);
}

}





function draw() {
imageMode(CENTER);
background(0,100,150);

for(let i=0;i<numbofgreen; i =i+1){

    image(greenlist[i],gexposlist[i],geyposlist[i],170,170);
    geyposlist[i]= geyposlist[i]+ yspeed[i];

    if( geyposlist[i] > height ){
      geyposlist[i]=0;
    }

}

for(let j =0; j<numboforange; j=j+1){

    image(orangelist[j],ogxposlist[j],ogyposlist[j],170,170);
    ogyposlist[j]= ogyposlist[j]+ yspeed[j];
    if( ogyposlist[j] > height ){
      ogyposlist[j]= 0;
    }
}


}
