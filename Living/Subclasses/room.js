/*
//a class to spawn in the rooms
class Room extends Basic{
  constructor(location){
    super(" ");
    this._location = location;
  }

  //getters
  get location(){
    return this._location;
  }

  //setters
  set location(location){
    this._location = location;
  }

  if (grid.x >= room.x && grid.x <= room.x + room.x) {
    " ";
  }
  if (grid.y >= room.y && grid.y <= room.y + room.y) {
    " ";
  }
}
*/

function room (size,name = " "){
  var area = [];
for (var i = 0; i < size.x; i++) {
  area.push([])
  for (var j = 0; j < size.y; j++) {
     area.push(name,[i,j]);
      }
    }
    return area;
  }

  function roomx (room){
    if(grid.length >= room.length && grid <= room.length + room.length){
            room = " ";
    }
    return room;
  }

function roomy (room){
   if(grid[0].length >= room[0].length && grid[0].length <= room[0].length + room.length){
           room[0].length = " ";
   }
   return room[0];
 }

function drawroom(roomx, roomy){
    roomx(map, room);
    draw(map);
    roomy(map);
    return draw(map, room);
  }

  var grid = grid({x:60,y:100}, Basic);
  var room = room({x:20,y:20});

  document.getElementById("button2").onclick = function(){
    document.getElementById("paragraph").innerHTML = drawroom(roomx, roomy);

  }
