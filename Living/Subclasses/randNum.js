//random odd number generator for x, y, xPos, & yPos
function randomOddNumber(numberX,numberY){
  var randIntX = Math.random()*numberX;
  var randIntY = Math.random()*numberY;
  roomArr = [];
  randIntX = Math.floor(randIntX);
  randIntY = Math.floor(randIntY);
  var remainderX = randIntX %2;
  var remainderY = randIntY %2;
  if(remainderX == 1){
     randIntX;
    roomArr.push(randIntX);
  }else if(remainderX == 0){
     randIntX = randIntX + 1;
    roomArr.push(randIntX);
  }
  if(remainderY == 1){
     randIntY;
    roomArr.push(randIntY);
  }else if(remainderY == 0){
     randIntY = randIntY + 1;
    roomArr.push(randIntY);
  }
  return roomArr;
}


function randNum(grid){
  var roomz = {
    x: Math.random() *grid[0].length/4,
    y: Math.random() *grid.length/4
  }
  roomz.xPos = Math.random() *(grid[0].length - roomz.x);
  roomz.yPos = Math.random() *(grid.length - roomz.y);

  roomz.x = Math.floor(roomz.x);
  roomz.y = Math.floor(roomz.y);

  roomz.xPos = Math.floor(roomz.xPos);
  roomz.yPos = Math.floor(roomz.yPos);

  return roomz;
}
