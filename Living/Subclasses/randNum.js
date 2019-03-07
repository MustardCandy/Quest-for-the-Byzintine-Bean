//atempt at random numbers
function randNum(grid){
    var roomz = {
      x : Math.random() *grid.length,
      y : Math.random() *grid.length,
      xPos: Math.random() *grid.length/4,
      yPos: Math.random() *grid.length/4
    }
    roomz.x = Math.floor(roomz.x);
    roomz.y = Math.floor(roomz.y);
    roomz.xPos = Math.floor(roomz.xPos);
    roomz.yPos = Math.floor(roomz.yPos);
    return roomz;
}
