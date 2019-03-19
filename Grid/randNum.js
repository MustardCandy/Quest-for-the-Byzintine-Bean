function randomOddNumber(grid){
  var randIntX = Math.random()*100;
  var randIntY = Math.random()*50;
  roomArrX = [];
  roomArrY = [];
  randIntX = Math.floor(randIntX);
  randIntY = Math.floor(randIntY);
  var remainderX = randIntX %2;
  var remainderY = randIntY %2;
  if(remainderX == 1){
     randIntX;
    roomArrX.push(randIntX);
  }else if(remainderX == 0){
     randIntX ++;
    roomArrX.push(randIntX);
  }
  if(remainderY == 1){
     randIntY;
    roomArrY.push(randIntY);
  }else if(remainderY == 0){
     randIntY ++;
    roomArrY.push(randIntY);
  }
  var roomArr = {
    x: roomArrX,
    y: roomArrY
  }
  return roomArr;
}

//random number generator to determine size of rooms
function randNum(grid, roomArrX, roomArrY){
  var roomz = {
    x: roomArrX/3,
    y: roomArrY/3
}

  roomz.xPos = Math.random() *(grid[0].length - roomz.x);
  roomz.yPos = Math.random() *(grid.length - roomz.y);

  roomz.x = Math.floor(roomz.x);
  roomz.y = Math.floor(roomz.y);

  roomz.xPos = Math.floor(roomz.xPos);
  roomz.yPos = Math.floor(roomz.yPos);
  return roomz;
}
