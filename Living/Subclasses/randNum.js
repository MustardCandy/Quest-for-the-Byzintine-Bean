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
    return remainder + 1;
  }
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
