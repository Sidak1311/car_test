var car, weight, speed, wall, deformation;

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200,50,20)
  speed = random(55,90);
  car.velocityX = speed;
  weight = random(800,1500);
  wall = createSprite(750,200,20,80)
}

function draw() {
  background("black");  
  drawSprites();
  if(car.isTouching(wall)){
    car.velocityX = 0
    deformation = (0.5 * weight * speed * speed)/22500
  }

  if(deformation < 100){
    car.shapeColor = color(0,255,0)
  }else if(deformation > 100 && deformation < 180){
    car.shapeColor = color(230,230,0)
  }else if(deformation > 180){
    car.shapeColor = color(255,0,0)
  }
}