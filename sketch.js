var bullet , wall
var speed , weight;
var thickness;

function setup() {
  createCanvas(1100,500);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(30, 30, 90, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = ("white");

  wall = createSprite(1000,200,thickness, 500);
  wall.shapeColor = (80,80,80);
  
}

function draw() {
  background(0,0,0);  
  
if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage > 10){
    bullet.shapeColor = ("red");
  }
  if(damage < 10){
    bullet.shapeColor = ("green");
  }
}

  drawSprites();
}

function hasCollided(bullet,wall){
bulletRightEdge = bullet.width+bullet.x;
wallLeftEdge = wall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true
}

return false;

}
