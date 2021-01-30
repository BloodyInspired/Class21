function isTouching(storeObj1, storeObj2){
    if (storeObj1.x - storeObj2.x < storeObj2.width/2 + storeObj1.width/2
      && storeObj2.x - storeObj1.x < storeObj2.width/2 + storeObj1.width/2
      && storeObj1.y - storeObj2.y < storeObj2.height/2 + storeObj1.height/2
      && storeObj2.y - storeObj1.y < storeObj2.height/2 + storeObj1.height/2) {
    return true;
  }
  else {
    return false;
  }
  }
  function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    } 
  }