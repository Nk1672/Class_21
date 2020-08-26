var fixedRect, movingRect, object1,O1,O2

function setup() {
  createCanvas(800,400);
  fixedRect=  createSprite(400, 200, 50, 50);
  movingRect = createSprite(200, 300, 50,50);
  object1=createSprite(200,200,50,60);
  object1.shapeColor="green";
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  O1=createSprite(0,350,50,50);
  O2=createSprite(400,350,50,50);
  O1.velocityX=2;
  O2.velocityX=-2;
}


function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y=World.mouseY
  if(isTouching(movingRect,object1)){
    object1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    object1.shapeColor="green";
    movingRect.shapeColor="green";
  }

  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
bounceOff();
  drawSprites();
}
function bounceOff(){
if(isTouching(O1,O2)){
  //O1.velocityY=O1.velocityY * (-1);
  //O2.velocityY=O2.velocityY * (-1);
  O1.velocityX=O1.velocityX * (-1);
  O2.velocityX=O2.velocityX * (-1);
}
}