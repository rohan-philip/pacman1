var pacman,ghost1,ghost2,ghost3,ghost4
var ghost1image,ghost2image,ghost3image,ghost4image
var score=0
function preload(){
  pacmanimage=loadImage("images/pacman.png")
  backgroundimg=loadImage("images/Bg.png")
  ghost1img=loadImage("images/ghost1.png")
  ghost2img=loadImage("images/ghost2.png")
  ghost3img=loadImage("images/ghost3.png")
  ghost4img=loadImage("images/ghost4.png")
  eat=loadSound("images/eat2sound.mp3")
  cherryimage=loadImage("cherry.png")
  die=loadSound("images/diesound.mp3")
}

function setup() {
  createCanvas(1000,600)
  pacman=createSprite(100,550,50,50)
  pacman.addImage(pacmanimage)
  pacman.scale=0.08
  edges= createEdgeSprites()
  ghost1=createSprite(100,100,10,10)
  ghost1.addImage(ghost1img)
  ghost1.scale=0.1
  
  ghost2=createSprite(150,100,10,10)
  ghost2.addImage(ghost2img)
  ghost2.scale=0.1

  ghost3=createSprite(200,100,10,10)
  ghost3.addImage(ghost3img)
  ghost3.scale=0.05

  ghost4=createSprite(250,100,10,10)
  ghost4.addImage(ghost4img)
  ghost4.scale=0.08

  cherryG=new Group()

  ghost1.velocityY=4
  ghost1.velocityX=1
  ghost2.velocityX=4
  ghost2.velocityY=3
  ghost3.velocityX=6
  ghost3.velocityY=4
  ghost4.velocityX=8
  ghost4.velocityY=3

}
function draw(){
  background(backgroundimg)
  //createEdgeSprites()

  pacman.bounceOff(edges)
  ghost1.bounceOff(edges)
  ghost2.bounceOff(edges)
  ghost3.bounceOff(edges)
  ghost4.bounceOff(edges)

  pacman.setVelocity(0,0)
  
  if(keyDown("UP_ARROW")){
    pacman.velocityY=-5
    eat.play()
  }
  if(keyDown("DOWN_ARROW")){
    pacman.velocityY=5
    eat.play()
  }
  if(keyDown("RIGHT_ARROW")){
    pacman.velocityX=6
    eat.play()
  }
  if(keyDown("LEFT_ARROW")){
    pacman.velocityX=-5
    eat.play()
  }

  if(frameCount%30===0)
{
  cherry=createSprite(Math.round(random(5,1000)),Math.round(random(10,600)),1,1)
  cherry.velocityX=3
  cherry.addImage(cherryimage)
  cherry.lifetime=100
  cherry.scale=0.007
  cherryG.add(cherry)
}

if(cherryG.isTouching(pacman)){
  cherryG.destroyEach()
  score=score+50
}


if(pacman.isTouching(ghost1)||
pacman.isTouching(ghost2)||
pacman.isTouching(ghost3)||
pacman.isTouching(ghost4)){
die.play()
pacman.destroy()
}




  drawSprites()
  fill("red")
  textSize(30)
  stroke("black")
  text("SCORE "+score,500,50)
}
