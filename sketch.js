function setup() {
  createCanvas(500,500);
  
  background(0,0,0);
}

function draw() {
 
 
 stroke(lerpColor(color('#000000'),color('#FF0000'),frameCount/120));     //red/black
 translate()
 angleMode(RADIANS);
 line(200,100,100*(1+cos(frameCount/2)),100*(1+sin(frameCount/2)));
  //if(frameCount==360)
 // noLoop();
 
 
 noFill();                                                              //multicol
 angleMode(DEGREES);
stroke(lerpColor(color('#0878FF'),color('#0fefca'),frameCount/120));
arc(400,100,200,200,0,frameCount*2, CHORD);
  if(frameCount==180)
  noLoop();
  
 
 translate(160,250);                                                     //white/black
 stroke(lerpColor(color('#FFFFFF'),color('#000000'),frameCount/600));
 
 line(200,100,100*(1+cos(frameCount)),100*(1+sin(frameCount)));
 //if(frameCount==360)
 // noLoop();


  
}