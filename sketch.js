
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ground,invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
// ground
  var ground=createSprite(300,180,700,20);
   ground.x = ground.width /2;
  
// scor
  score=0
  // monkey
  monkey=createSprite(60,150,15,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.13
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.heigh);
  monkey.debug = true
  // invisible ground
   var invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  //invisibleGround.shapecolor=("black")
  //create Obstacle and Cloud Groups
  //obstaclesGroup = createGroup();
  //bananaGroup = createGroup();

  
  
  
}


function draw() {
  background("white");
  // score
  text("Score: "+ score, 500,50);
  
  
  if(gameState===PLAY){
     //ground.velocityX = -(4 + 3* score/100)
    //scoring
    score = score + Math.round(getFrameRate()/40);
   /// if (ground.x < 0){
    //  ground.x = ground.width/2;
   // }
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 161) {
        mokey.velocityY = -12;
        //jumpSound.play();
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
   // monkey.collide(invisibleGround);
  
    
    
  }
  
  spawnObstacles();
  spawnbananas();
 
  drawSprites();
  
}

function reset(){
 gameState=PLAY;
 gameOver.visible = false;
// restart.visible = false;
 monkey.changeAnimation("running",monkey_running);
  obstaclesGroup.destroyEach();
  bananasGroup.destroyEach();
  score=0;
}
function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600,160,10,40);
    obstacle.velocityX = -(5 + score/100);
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImage);
              break;
      case 2: obstacle.addImage(obstacleImage);
              break;
      
      default: break;
    }
    
     //assign lifetime to the variable
    obstacle.scale=0.15
    obstacle.lifetime = 300;
    
    
    //add each cloud to the group
   // obstaclesGroup.add(obstacle);
  }
}
function spawnbananas() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
   
    //add each cloud to the group
   // bananasGroup.add(banana);
  }
}




