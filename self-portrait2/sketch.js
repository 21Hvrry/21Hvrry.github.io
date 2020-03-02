let eyeSpacing = 35;
let values = [];
let i = 0;
let j = 0;
let eyeMotion = 0;

function setup() {
  createCanvas(400, 400);
   for(let i = 0;i<width/8;i++){
    values.push(random(height));
  }
}

function draw() {
  background(50,50,200);
  fill(100,100,60);
  console.log("x: " + mouseX + ", y: " + mouseY);
  
  eyeMotion = constrain(map(mouseX, 0, width, -5, 5), -5, 5);
  
  push();
  bubbleSort();
  simulateSorting();
  pop();
  
  fill (200,140,100);
  ellipse(width/2, height/2, 160,200);
  
  //hair
  push();
  if (mouseIsPressed){
    fill(300,20,100);
  } else {
  fill(0);}
  rotate(0);
  arc(width/2,145,140,90,PI,0);
  pop();
  
  //eyes
  push();
    fill(255);
    translate(0,175);
    //eye on the left
      push();
        translate(width/2-eyeSpacing, 0);
        ellipse(0, 0, 35, 25);
          push();
            translate(eyeMotion,0);
            fill(140,90,0);
            ellipse(0,0,17,17);
              push();
                fill(0);
                ellipse(0,0,7,7);
              pop();
          pop();
      pop();
    //eye on the right
      push();
        translate(width/2+eyeSpacing,0);
        ellipse(0,0,35,25);
          push();
            translate (eyeMotion,0);
            fill(140,90,0);
            ellipse(0,0,17,17);
              push();
                fill(0);
                ellipse(0,0,7,7);
              pop();
          pop();
      pop();
  pop();

  // nose
  push();
  fill(200,140,100);
  triangle(178,218, 220, 218,198,190);
  pop();
  
  //mouth
  push();
  fill(300);
  arc(width/2,230,85,90,0,PI);
  pop();
  
  push();
  fill(255,220,0);
  textSize(32);
  text('Harry Garcia',110,343);
  pop();

}

function bubbleSort() {
  for(let k = 0;k<2;k++){
    if(i<values.length){
      let temp = values[j];
      if(values[j] > values[j+1]){
        values[j] = values[j+1];
        values[j+1] = temp;
      }
      j++;
      
      if(j>=values.length-i-1){
        j = 0;
        i++;
      }
    }
    else{
      noLoop();
    }
  }
}

function simulateSorting(){
  for(let i = 0;i<values.length;i++){
    stroke(0);
     fill(300,20,0);
     rect(i*10 , height, 8, -values[i],20);
   }
}
