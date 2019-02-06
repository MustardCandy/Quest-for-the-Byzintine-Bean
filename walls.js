class Wall {
  constructor(name, location) {
    this._name = name;
    this._location = location;
  }
}

//getters
get location(){
  return this._location
}

//setters
set location(location){
  this._location = location;
}

toString(){
  return this._name
}
