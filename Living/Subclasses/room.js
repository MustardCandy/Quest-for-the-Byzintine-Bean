class Roomz {
  constructor(name = " ",x,y,Xpos,Ypos){
    this._name = this._name;
    this._x = this._x;
    this._y= this._y;
    this._Xpos = this.Xpos;
    this._Ypos = this._Ypos ;
  }
  toString(){
    return this._name
  }
    set name(name){
      this._name = name;
}
    set x(x){
      this._x = x;
  }
    set y(y){
      this._y = y;
    }
    set Xpos(Xpos){
      this._Xpos = Xpos;
}
    set Ypos(Ypos){
      this._Ypos = Ypos;
}
    get name(){
     return this._name;
}
    get x(){
      return this._x;
}
    get y(){
        return this._y;
}
    get Xpos(){
        return this._Xpos;
}
    get Ypos(){
        return this._Ypos;
  }
}

function room (number, name = " "){
  var aray = []
  for (var i = 0; i < number[0]; i++) {
    for (var j = 0; j < number[1]; j++) {
      aray.push([i,j]);
    }
  }
  return aray;
}

function spacexy (room){
  //space x length
  if (map.length >= roomz.x && map.length <= roomz.x + roomz.xLength) {
    " ";
  }
    //for the spaces y coordes
    if (map.length >= roomz.y && map.length <= roomz.y + roomz.yLength) {
      " ";
  }
}

function drawSpace (spacexy){
  spacexy(grid);
  draw(spacexy);
  return draw(grid,room);
}

//a class to spawn in the rooms
// class Room extends Basic{
//   constructor(location){
//     super(" ");
//     this._location = location;
//   }

//   //getters
//   get location(){
//     return this._location;
//   }
//
//   //setters
//   set location(location){
//     this._location = location;
//   }
// }
