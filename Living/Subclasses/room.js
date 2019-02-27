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
}

function room (size, name = " "){
  var area = [];
for (var i = 0; i < size.x; i++) {
  area.push([])
  for (var j = 0; j < size.y; j++) {
     area.push(name,[i,j]);
      }
    }
    return area;
  }

function spacex (location){
  if (grid.length >= room.length && grid <= room.length + room.length) {
    " ";
  }
}

function spacey (location){
  if (grid.length >= room[0].length && grid <= room[0].length + room[0].length) {
    " ";
  }
}

var roomz = room([20,20]);

function drawroom(spacex, spacey){
    spacex(roomz);
    spacey(roomz);
    draw(map);
    return draw(map, roomz);
  }
/*
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

function roomx (roomz){
    if(grid.length >= room.length && grid <= room.length + room.length){
            room = " ";
    }
    return room;
  }

function roomy (roomz){
   if(grid[0].length >= room[0].length && grid[0].length <= room[0].length + room.length){
           room[0].length = " ";
   }
   return room[0];
 }

function drawroom(roomx, roomy){
    roomx(map, roomz);
    draw(map);
    roomy(map);
    return draw(map, roomz);
  }

  var grid = grid({x:60,y:100}, Basic);
  var roomz = room({x:20,y:20});

  document.getElementById("button2").onclick = function(){
    document.getElementById("paragraph").innerHTML = drawroom(roomx, roomy);

  }
*/
