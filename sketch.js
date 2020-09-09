var thickness,wall;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="grey";
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;
 
if(hascollide(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    bullet.shapeColor="green";
    wall.depth = bullet.depth;
  bullet.depth = bullet.depth + 15;
  }
  if(damage<10){
    bullet.shapeColor="red";
    wall.depth = bullet.depth;
  bullet.depth = bullet.depth + 15;
  }
}
  drawSprites();
}
function hascollide(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}