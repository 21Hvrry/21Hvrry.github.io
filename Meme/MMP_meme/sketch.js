var img; 
var img2;
let song;

function preload () {
  img = loadImage('baby_yoda.png');
  img2 = loadImage('baby_yoda2.png');
  song = loadSound('sad_violin.mp3');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background (123,2,23)
  console.log("x: " + mouseX + ", y: " + mouseY);

  if (mouseIsPressed) {
    song.play();
    image(img2,110,174);
    text('BUT THEY FORGOT YOUR', 9,140);
    text('SUACE FOR YOUR',67,310);
    text('CHICKEN NUGGIES',64,340);
    textSize(30);
    fill(300)
    
  }
  else {
     song.stop();
     image(img,110,174);
     text('THAT MONENT WHEN YOU',9,140);
     text('FINALLY GET YOUR',67,325);
     text('CHICKEN NUGGETS',64,354);
     textSize(30);
     fill(300);
  }

}

