//atempt at random numbers
function randNum(grid){
  var roomz = {
    x: Math.random() *grid[0].length/4,
    y: Math.random() *grid[1].length/4,
  }

  roomz.xPos = Math.random() *(grid[0].length - room.x);
  roomz.yPos = Math.random() *(grid[1].length - room.y);

  roomz.x = Math.floor(roomz.x);
  roomz.y = Math.floor(roomz.y);
  roomz.xPos = Math.floor(roomz.xPos);
  roomz.yPos = Math.floor(roomz.yPos);
  return roomz;
}
