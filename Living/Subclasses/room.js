
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
var roomz = grid([10],Room)

function space (location){
  if (map.x >= roomz.x && map.x <= roomz.x + roomz.length) {
    " ";
  }
}
