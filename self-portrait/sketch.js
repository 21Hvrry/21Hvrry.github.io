let eyespacing = 35;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50,50,200);
    // fill(255,0,0);
  // ellipse(width/2, height/2-50, 160,200);
  fill(100,100,60);
  console.log("x: " + mouseX + ", y: " + mouseY);

  fill (200,140,100);
  ellipse(width/2, height/2, 160,200);
  
  //hair
  push();
  fill(0);
  //noFill();
  rotate(0);
  arc(width/2,145,140,90,PI,0);
  pop();

  //eyes
  push();
    fill(255);
    translate(0,175);
      push();
        translate(width/2-eyespacing,0);
        ellipse(0,0,35,25);
          push();
            fill(140,90,0);
            ellipse(0,0,17,17);
              push();
                fill(0);
                ellipse(0,0,7,7);
              pop();
          pop();
      pop();
  pop();
    push();
      fill(255);
      translate(0,175);
        push();
          translate(width/2+eyespacing,0);
          ellipse(0,0,35,25);
            push();
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
  
  //beginShape();
  // vertex(120,177);
  // vertex(270,177);
  // vertex(width/2,99)
  // endShape(CLOSE);
  
  
}