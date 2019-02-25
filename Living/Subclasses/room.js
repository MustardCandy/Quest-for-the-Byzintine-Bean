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
