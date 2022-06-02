//it is declared globally
//position of ball
let bx, by; 

//movement for ball
let bdx, bdy;

// movement for paddle
let pdx, pdy;


//this is called only once
function setup() {
  createCanvas(400, 400);
  background("black"); // canvas background color
  
  fill("white");
  bx= width/2;
  by= height/2;
  bdiam= 30;
  
  pl=100;
  pw=20;
  
  bdx=20; // for movement of ball
  bdy=5;
  
  // position of paddle
  px=width/2-pl/2;
  py= height-pw/2;
  
  // txt placing --> 1.text size 2.text(content, tpx, tpy)
  textSize(30);
  text("score", 20, 30);
  
  // //we must fill color before drawing shape
  // fill("red");
  // //circle defination (x,y,diameter)
  // stroke("white"); // radius color of  shape in canvas
  // circle(50,50,50);
  
  // fill("black");
  // //x,y,length ,breadth
  // rect(30, 20, 55, 4);
}


//this function calls itself in every 10ms
function draw() {
  background("black");
  circle(bx, by, bdiam); // ball
  
  rect(px,py , pl, pw);
  
  
  //for movement of ball in x & y axis as after every 10ms it will changed 
  bx= bx+ bdx;
  by = by + bdy;
  
  // bounce back with x axis since it has crossed width
  if(bx+(bdiam/2)>=width){
    bdx= -bdx; //initially its was 1 but now its -1 so instead of increasing bx it will be decreased. 
  }
  if (bx-(bdiam/2)<=0){
    bdx = -bdx;
  }
  
  //bouncing from padding
  if( (by==height-pw && (bx>=px && bx<=(px+pl) )) {
     bdx=-bdx;
     }
  
  //bouncing back with y axis
  if(by+(bdiam/2)>=height){
    
    //bouncing again rom bottom 
    // bdy = -bdy;
    
    //if it touches the bottom it stops 
    bdy = 0;
    bdx=0;
    
    //if its ouches the bottom it again stat from center 
    // bx=width/2;
    // by=height/2;
  }
  if(by-(bdiam/2)<=0){
    bdy =-bdy;
    // bdx=0;
  }
  
  
  
  //paddle movement for left and right and second condition is for paddle should not go outside the boundry
  if(keyIsDown(LEFT_ARROW) && px>0){
    px = px - 2;
  }
  
  if(keyIsDown(RIGHT_ARROW) && px+pl<width){
    px = px + 2;
  }
  
}