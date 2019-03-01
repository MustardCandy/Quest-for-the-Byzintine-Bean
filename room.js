class Roomz {
constructor(name,x,y,Xpos,Ypos){
this._name = this._name;
this._x = this._x;
this._y= this._y;
this.Xpos = this.Xpos;
this._Ypos =this._Ypos ;
}
}

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

function spacexy (room){
  //space x length
  if (map.length >= roomz.x && map.length <= roomz.x + roomz.xLength) {
    " ";
    console.log();
  }
    //for the spaces y coordes
    if (map.length >= roomz.y && map.length <= roomz.y + roomz.yLength) {
      " ";
      console.log();
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

  //getters
  get location(){
    return this._location;
  }

  //setters
  set location(location){
this._location = location;
  }
}
