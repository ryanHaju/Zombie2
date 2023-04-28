var bg, bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;
var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;
var zombieGroup;
var bullets = 70,bulletImg;
var bulletGroup;

function preload() {
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  zombieImg = loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg");
  heart1Img = loadImage("assets/heart_1.png");
  heart2Img = loadImage("assets/heart_2.png");
  heart3Img = loadImage("assets/heart_3.png");
  bulletImg = loadImage("assets/bullet.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //adding the background image
  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20)
  bg.addImage(bgImg)
  bg.scale = 1.1


  //creating the player sprite
  player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle", 0, 0, 300, 300)

  heart1 = createSprite(displayWidth - 150, 40, 20, 20);
  heart1.visible = false;
  heart1.addImage("heart1", heart1Img);
  heart1.scale = 0.3;
  heart2 = createSprite(displayWidth - 100, 40, 20, 20)
  heart2.visible = false;
  heart2.addImage("heart2", heart2Img);
  heart2.scale = 0.3;
  heart3 = createSprite(displayWidth - 150, 40, 20, 20)
  heart3.visible = true;
  heart3.addImage("heart3", heart3Img);
  heart3.scale = 0.3;

  zombieGroup = new Group();
  bulletGroup = new Group();

}

function draw() {
  background(0);
  if(gameState==="PLAY"){
  if (keyDown("UP_ARROW") || touches.length > 0) {
    player.y = player.y - 20
  }
  if (keyDown("DOWN_ARROW") || touches.length > 0) {
    player.y = player.y + 20
  }

  if (keyDown("LEFT_ARROW") || touches.length > 0) {
    player.x = player.x - 20
  }

  if (keyDown("RIGHT_ARROW") || touches.length > 0) {
    player.x = player.x + 20
  }

  if (keyWentDown("space")) {
    player.addImage(shooter_shooting)

  }
  else if (keyWentUp("space")) {
    player.addImage(shooterImg)
  }

  if(keyWentDown("SPACE")){
    bullet=createSprite(displayWidth-1150,player.y-30,20,10);
    bullet.addImage(bulletImg);
    bullet.scale=0.2;
    bulletGroup.add(bullet);
    bullet.velocityX=2;
    
  }
  if (zombieGroup.isTouching(player)) {
    for (var i = 0; i < zombieGroup.length; i++) {
      if (zombieGroup[i].isTouching(player)) {
        zombieGroup[i].destroy();
      }
    }
  }
}
  zombieSwarm();

  
  drawSprites();

}
 function zombieSwarm(){
  if(frameCount % 45 === 0){
  zombie = createSprite(random(1800,1800),random(300,700),40,40);
  zombie.addImage(zombieImg);
  zombieGroup.add(zombie);
  zombie.scale = 0.14
  zombie.velocityX = -3;
 }}