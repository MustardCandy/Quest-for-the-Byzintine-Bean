function randomOddNumber(){
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
     randIntX = randIntX + 1;
    roomArrX.push(randIntX);

//random odd number generator for x, y, xPos, & yPos
function randomOddNumber(number){
  var randInt = Math.random()*number;
  randInt = Math.floor(randInt);
  console.log(randInt);
  var remainder = randInt %2;
  console.log(remainder);
  if(remainder == 1){
    return remainder;
  }else if(remainder == 0){
    return null;
  }
  if(remainderY == 1){
     randIntY;
    roomArrY.push(randIntY);
  }else if(remainderY == 0){
     randIntY = randIntY + 1;
    roomArrY.push(randIntY);
  }
  console.log(roomArrX);
  console.log(roomArrY);
  return roomArr;
}

//random number generator to determine size of rooms
function randNum(grid){
  var roomz = {
    x: roomArrX/3
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
