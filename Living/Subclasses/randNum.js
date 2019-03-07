//atempt at random numbers
function randNum(grid){
    var roomz = {
      x : Math.random() *grid[0].length,
      y : Math.random() *grid[1].length,
      xPos: Math.random() *grid[0].length/4,
      yPos: Math.random() *grid[1].length/4
    }
    roomz.x = Math.floor(roomz.x);
    roomz.y = Math.floor(roomz.y);
    roomz.xPos = Math.floor(roomz.xPos);
    roomz.yPos = Math.floor(roomz.yPos);
    return roomz;
}
