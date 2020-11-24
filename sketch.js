var bullet, wall 
var speed
var weight
var deformation
var thickness


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(0, 150, 50, 10);
  speed = random(223,321);
  weight = random(30,52);

  bullet.velocityX = speed;
  bullet.weight = weight;
  thickness = random(22,83)
  wall = createSprite(1500,200,thickness,height/2)
  wall.shapeColor = (80,80,80)
}

function draw() {
  background(255,255,255);  
  
  
if(bullet.isTouching(wall)){
  var damage = 0.5*weight*speed*speed/(thickness *thickness *thickness);

   bullet.velocityX = 0;
   bullet.x = 1000;
   bullet.y = 200;


}


fill("black")
text("Damage :  "+ damage,600,200)
  drawSprites();
}