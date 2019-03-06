//atempt at random numbers
function numbers(grid){
    var room = {
      lenY: Math.random() *grid.length/4,
      lenY: Math.random() *grid.length/4,
      y : Math.random() *grid.length,
      x : Math.random() *grid.length,
    }
    room.x = Math.floor(room.x);
    room.y = Math.floor(room.y);
    room.lenX = Math.floor(room.lenX);
    room.lenY = Math.floor(room.lenY);
    return room;
}
