var roomz = {x: 5, y: 5, xLength: 5, yLength: 5}

function room (size,name = " "){
  var aray = []
  for (var i = 0; i < size.x; i++) {
    aray.push([]);
    for (var j = 0; j < size.y; j++) {
      aray.push(name,[i,j]);
    }
  }
  return aray;
}

function spacex (room){
  //space x length
  if (map.length >= roomz.x && map.length <= roomz.x + roomz.xLength) {
    " ";
  }
}

function spacey (room){
  //for the spaces y coordes
  if (map.length >= roomz.y && map.length <= roomz.y + roomz.yLength) {
    " ";
  }
}

function drawSpace (spacex,spacey){
  spacex(grid);
  spacey(grid)
  draw(spacex,spacey);
  return draw(grid,room);
}

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
<<<<<<< HEAD
//the double for loop should it be grid?
for(var i = 0; i < map.length; i++){
  grid[i]

for (var j = 0; j < map.length; j++) {
  grid[j]
}
}
=======
>>>>>>> 3da51d3fdd71e8b5a834557013c52d733f5bf1c0
}
