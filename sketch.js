
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score=0
var survivalTime=0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1

  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  console.log(ground.x)
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  background("white")
  
  stroke("white")
  textSize(20)
  fill("white")
  text("score: "+score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  text("Survival Time: "+survivalTime,100,50);
  survivalTime=Math.ceil(frameCount/frameRate());
    
  if(keyDown("space")){
   monkey.velocityY=-14;
  }
    
  monkey.velocityY=monkey.velocityY+0.8; 
  
  food();
  obstacles();
    
  if (obstacleGroup.isTouching(monkey)){
    monkey.velocityY=0;   
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
  }
    
  ground.x=ground.width/2;
  
  monkey.collide(ground);

  drawSprites();
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(600,120,40,10);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.Lifetime=200;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(600,330,10,40);
    obstacle.velocityX=-6;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.Lifetime=300;
    obstacleGroup.add(obstacle);
 }
}




