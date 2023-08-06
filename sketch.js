var mar = createSprite(200,200);
var navio = createSprite(200,200);
function preload(){
  barco = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png");
  oceano = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
    drawSprites();
  mar.addImage("oceano");
  if(mar.x < 0){
    mar.x = mar.width/2;
  }
}
