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
var room = grid([20,10],Room);
function room(number, element, name=" "){
  var gridArray = [];
   for (var i = 0; i < number[0]; i++) {
         gridArray[i] = [];
     for (var j = 0; j < number[1]; j++) {
       gridArray[i][j] = new element(name, [i,j]);
     }
  }
  return gridArray;
}
function draw(grid){
    var borderType = ""; //borderType

    var gridLength = grid.length;//y length

    var lengthGrid = grid[0].length;//x length

    borderType += "+"; //corner

  for (var i = 0; i < lengthGrid; i++) {
      borderType += "~~"; //border
    }

    borderType += "+"; //corner

    borderType += "<br>"; //break used

    for (i = 0; i < gridLength; i++) {
      borderType += "|" //border

      for (j = 0; j < lengthGrid; j++) {
        borderType += " " + grid[i][j]; //spaces
      }

      borderType += "|" + "<br>"; //border and break
    }

    borderType += "+"; //corner
    for (var i = 0; i < lengthGrid; i++) {
        borderType += "~~"; //border
      }

      borderType += "+"; //corner

      borderType += "<br>"; //break

  return borderType; //return all of the borderType
}



//draw creates the grid using characters and line breaks

document.getElementById("button3").onclick = function(){
  document.getElementById("paragraph").innerHTML = draw(room);

}
