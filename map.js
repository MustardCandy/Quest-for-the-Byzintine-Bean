//this page creats the grid 

  function myTimer(){
    update(grid)
  }
  function grid(number, element, name = "#"){
    var number = number;
    var returnz = [];
    for (var i = 0; i < number; i++) {
      returnz.push([]);
    for (var j = 0; j < number; j++) {
      returnz[i].push(new element(name,[i,j]));
    }
  }
  return returnz;
  }

function update(){
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid.length; j++) {
      grid[i][j].haveMoved = false;
      grid[i][j].haveBreed = false;
    }
  }

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid.length; j++) {
      var gridXY = grid[i][j];
      gridXY.move(grid);
      gridXY.breed(grid);
    }
  }
  document.getElementById("blah").innerHTML = draw(grid);
}


function draw(grid){
  //draws the orginal grid full of the default Basic class
  var str = "";
  var notkewl = grid.length;
  var top = notkewl *2;
    str += "+";
  for (var i = 0; i < notkewl; i++) {
    top = str += "--";
}
  str += "+<BR>";
  for (var i = 0; i < notkewl; i++) {
    str += "| ";
  for (var j = 0; j < notkewl; j++) {
      grid[i][j];
      str += " " + grid[i][j];
}

    str += "|<BR>";
}

  str += "+";
  for (var i = 0; i < notkewl; i++) {
    top = str += "--";
}

  str += "+";
  return str;
}
  var grid = grid(50 Basic);

  document.getElementById("paragraph").innerHTML = draw(grid);

  //makes a timer that  upadtes the grid every 300 milisecounds
  document.getElementById("button").onclick = function(){
  document.getElementById("paragraph").innerHTML = draw(grid);
myTimer();

}
