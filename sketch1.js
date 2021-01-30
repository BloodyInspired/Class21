var fixedRect, movingRect;
var one,two,three,four;
var moveObj;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(1000, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  one = createSprite(400, 500, 60, 20);
  one.shapeColor = "red"
  two = createSprite(400, 200, 60, 20);
  two.shapeColor = "red"
  three = createSprite(400, 300, 60, 20);
  three.shapeColor = "red"
  four = createSprite(400, 400, 60, 20);
  four.shapeColor = "red"
  moveObj = createSprite(600, 200, 30, 25);
  moveObj.shapeColor = "red"
  movingRect.velocityX = +5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  moveObj.x = World.mouseX;
  moveObj.y = World.mouseY;
  if(isTouching(moveObj, one)){
    moveObj.shapeColor = "blue";
    one.shapeColor = "blue";
  }
  else{
    moveObj.shapeColor = "red";
    one.shapeColor = "red";
  }
  if(isTouching(moveObj, two)){
    moveObj.shapeColor = "yellow";
    two.shapeColor = "yellow";
  }
  else{
    moveObj.shapeColor = "red";
    two.shapeColor = "red";
  }
  bounceOff(movingRect,fixedRect);
  drawSprites();
}