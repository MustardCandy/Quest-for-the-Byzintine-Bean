//var that creates walls
var wall = new Wall("#");

//map is the grid that is created
var map = grid(30, "#");

//map creates a map for everything
//needs number, element, name
function grid(number, element, name){
  var number = number;
  var gridArray = [];
   for (var i = 0; i < number; i++) {
         gridArray[i] = [];
     for (var j = 0; j < number; j++) {
       gridArray[i][j] = new element(name, [i,j]);
     }
  }
  return gridArray;
}

function draw(grid){
    var borderType = ""; //borderType

    var gridLength = grid.length;

    borderType += "+"; //corner

  for (var i = 0; i < grid.length; i++) {
      borderType += "--"; //border
    }

    borderType += "+"; //corner

    borderType += "<br>"; //break used

    for (i = 0; i < gridLength; i++) {
      borderType += "|" //border

      for (j = 0; j < gridLength; j++) {
        borderType += " " + grid[i][j]; //spaces
      }

      borderType += "|" + "<br>"; //border and break
    }

    borderType += "+"; //corner
    for (var i = 0; i < grid.length; i++) {
        borderType += "~~"; //border
      }

      borderType += "+"; //corner

      borderType += "<br>"; //break

  return borderType; //return all of the borderType
}
