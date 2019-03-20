function randomOddNumber(grid){
  var roomArr = {
    x: roomArrX,
    y: roomArrY
  }
  var randIntX = Math.random()*100;
  var randIntY = Math.random()*50;
  var roomArrX;
  var roomArrY;
  randIntX = Math.floor(randIntX);
  randIntY = Math.floor(randIntY);
  var remainderX = randIntX %2;
  var remainderY = randIntY %2;
  if(remainderX == 1){
     randIntX;
    roomArrX = randIntX;
  }else if(remainderX == 0){
     randIntX ++;
    roomArrX = randIntX;
  }
  if(remainderY == 1){
<<<<<<< HEAD
    randIntY;
    roomArrY = randIntY;
  }else if(remainderY == 0){
    randIntY ++;
=======
     randIntY;
    roomArrY = randIntY;
  }else if(remainderY == 0){
     randIntY ++;
>>>>>>> 0207f4a323453a2ee0cec7868a1107443e9db458
    roomArrY = randIntY;
  }
  var roomArr = {
    x: roomArrX,
    y: roomArrY
  }
  console.log(roomArr.x)
  console.log(roomArr.y)
    return roomArr;
}

//random number generator to determine size of rooms
//roomArr is still return nothing ask mr malorie why
function randNum(grid,randomOddNumber){
  var roomz = {
    x: roomArr.x/3,
    y: roomArr.y/3
}

  roomz.xPos = Math.random() *(grid[0].length - roomz.x);
  roomz.yPos = Math.random() *(grid.length - roomz.y);

  roomz.x = Math.ceil(roomz.x);
  roomz.y = Math.ceil(roomz.y);

  roomz.xPos = Math.floor(roomz.xPos);
  roomz.yPos = Math.floor(roomz.yPos);
    return roomz;
}
