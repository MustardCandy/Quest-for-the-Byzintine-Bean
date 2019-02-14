//a class to spawn in the rooms
class Room extends Basic{
  constructor(location){
  super(" ");
  this._location = location;
}
get location(){
  return this._location;
}
set location(location){
  this._location = location;
}
}
