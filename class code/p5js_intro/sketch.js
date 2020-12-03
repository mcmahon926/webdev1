let xPos = 0;
let yPos = 0;
let size = 40;


function setup() {
  let cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent("#sketch-parent");
  background( 100, 400, 300);
  
  
}

function draw() {
  //background(225, 255, 100);
  
  fill(mouseX/2, mouseY/2, 255);
  stroke(255, 0, 0);
  strokeWeight(1);
  ellipse(mouseX, mouseY, size, size);
  
  xPos = xPos + 1;
  xPos+=1;
  print(xPos);
  
  if(xPos > width + size/2){
    xPos = -size/2;
    yPos = random(height);
    
  }
  
}

function windowResized(){
    resizeCanvas(innerWidth, innerHeight);
    background(100, 400, 300);
}