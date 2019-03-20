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
<<<<<<< HEAD
    roomArrX = randIntX;
=======
    this.roomArr.x.push(randIntX);
>>>>>>> 965b100d849f83cc277a802a75dcb609c7e8d343
  }
  if(remainderY == 1){
     randIntY;
    roomArrY = randIntY;
  }else if(remainderY == 0){
     randIntY ++;
<<<<<<< HEAD
    roomArrY = randIntY;
  }
  var roomArr = {
    x: roomArrX,
    y: roomArrY
=======
    this.roomArr.y.push(randIntY);
>>>>>>> 965b100d849f83cc277a802a75dcb609c7e8d343
  }
  console.log(roomArr.x)
  console.log(roomArr.y)
  return roomArr;
}

//random number generator to determine size of rooms
function randNum(grid, roomArr){
  var roomz = {
    x: roomArr.x/2,
    y: roomArr.y/2
}

  this.roomz.xPos = Math.random() *(grid[0].length - roomz.x);
  this.roomz.yPos = Math.random() *(grid.length - roomz.y);

  this.roomz.x = Math.ceil(roomz.x);
  this.roomz.y = Math.ceil(roomz.y);

  this.roomz.xPos = Math.floor(roomz.xPos);
  this.roomz.yPos = Math.floor(roomz.yPos);
  return roomz;
}
