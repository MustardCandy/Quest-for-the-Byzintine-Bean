//atempt at random numbers
function randNum(grid){
    var roomz = {
      Xpos: Math.random() *grid.length/4,
      Ypos: Math.random() *grid.length/4,
      y : Math.random() *grid.length,
      x : Math.random() *grid.length,
    }
    roomz.x = Math.floor(roomz.x);
    roomz.y = Math.floor(roomz.y);
    roomz.Xpos = Math.floor(roomz.Xpos);
    roomz.Ypos = Math.floor(roomz.Ypos);
    return roomz;
}
