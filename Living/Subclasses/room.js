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

var boon = {x: 2, y: 4, xPos: 3, yPos: 5}

function room (grid, randNum){
  var retArr = [];
  for (var i = randNum.yPos; i < randNum.y + randNum.yPos; i++) {
    for (var j = randNum.xPos; j < randNum.x + randNum.xPos; j++) {
      retArr.push([i,j]);
    }
  }
  return retArr;
}

function drawRoom (grid, room){
  for (var i = 0; i < room.length; i++) {
    grid[room[i][0]][room[i][1]] = " ";
  }
  return room;
}
