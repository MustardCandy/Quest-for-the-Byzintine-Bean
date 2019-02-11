//map is the grid that they are currently on
var map = grid([50,100],Basic);

document.getElementById("paragraph").innerHTML = draw(map);

//grid is the grid the hobbits and nazguls live on
//needs number, elemnt, and a name
function grid(number, element, name="#"){
  var number = number;
  var gridArray = [];
   for (var i = 0; i < number[0]; i++) {
         gridArray[i] = [];
     for (var j = 0; j < number[1]; j++) {
       gridArray[i][j] = new element(name, [i,j]);
     }
  }
  return gridArray;
}

//draw creates the grid using characters and line breaks
function draw(grid){
    var borderType = ""; //borderType

    var gridLength = grid.length;

    borderType += "+"; //corner

  for (var i = 0; i < grid.length; i++) {
      borderType += "~~"; //border
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

//button reset
//re-draws grid
document.getElementById("button1").onclick = function(){
  document.getElementById("paragraph").innerHTML = draw(map);
  console.log("Worked");
}
