var groundImage
var cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12
function preload() {
  groundImage = loadImage("forest.png");

}

function setup() {
  createCanvas(800,400);
  ground = createSprite(400, 200, 800, 50);
  ground.addImage(groundImage);
  ground.velocityX = - 1

}

function draw() {
  background(0); 

  if(ground.x < 0){
    ground.x = 400
  }

  drawSprites();
}

