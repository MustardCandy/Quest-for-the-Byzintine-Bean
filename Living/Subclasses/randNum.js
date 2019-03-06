//atempt at random numbers
function randNum(grid){
    var roomz = {
      Xpos: Math.random() *grid.length/4,
      Ypos: Math.random() *grid.length/4,
      y : Math.random() *grid.length,
      x : Math.random() *grid.length,
    }
    roomz.x = Math.floor(room.x);
    roomz.y = Math.floor(room.y);
    roomz.lenX = Math.floor(room.lenX);
    roomz.lenY = Math.floor(room.lenY);
    return roomz;
}
