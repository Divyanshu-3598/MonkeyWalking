  var ground;
  var monkey , monkey_running, monkey_collided;
  var banana ,bananaImage, obstacle, obstacleImage;
  var foodGroup, obstacleGroup;
  var survivalTime = 0;

  function preload(){


    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");

  }

  function setup() {
      createCanvas(600,550);

    ground = createSprite(400,550,1300,10);
    ground.velocityX=-4;
    ground.x = ground.width /2;

    monkey = createSprite(80,515,20,20);
    monkey.addAnimation("monkey", monkey_running);
    monkey.scale=0.1;

    foodGroup = createGroup();
    obstacleGroup = createGroup();
  }

  function draw() {
   background("white");
    
 
   
    
  stroke("white");
 textSize(20);   
 fill("white");
  
  stroke("black");
 textSize(20);
 fill("black");
 survivalTime=Math.ceil(frameCount/frameRate())
 text("Survival Time:"+ survivalTime,300,100);    

 


    if(keyDown("space")&& monkey.y >= 500) {
       monkey.velocityY = -15;
  }
   //add gravity
    monkey.velocityY = monkey.velocityY + 0.8

   if (ground.x < 0){
       ground.x = ground.width/2;
   } 
     monkey.collide(ground);

   food();
   obstacles(); 
   drawSprites(); 

  }

  function food(){
   if (frameCount % 80 === 0){
     banana = createSprite(600,350,10,40);
     banana.addImage("banana",bananaImage);
     banana.scale=0.1;
     banana.y=Math.round(random(350,450));
     banana.velocityX=-8;

    foodGroup.add(banana);
   }
  }
  function obstacles() {

   if(World.frameCount % 300 === 0) {
     obstacle = createSprite(600,515,20,20)  ;
     obstacle.addImage("obstacle",obstacleImage); 
     obstacle.scale=0.25;
     obstacle.velocityX=-10;

    obstacleGroup.add(obstacle);  
     }
  }
