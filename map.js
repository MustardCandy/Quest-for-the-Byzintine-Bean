//this page creats the grid
var grid = grid([50,100],Basic);


  function myTimer(){
    update(grid)
  }

  function grid(number, element, name ="#"){

    var returnz = [];
    for (var i = 0; i < number[0]; i++) {
      returnz.push([]);
      for (var j = 0; j < number[1]; j++) {
        returnz[i].push(new element(name,[i,j]));
      }
    }
    return returnz;
  }

  function update(){
<<<<<<< HEAD
=======

function myTimer(){
  update(grid)
}
function grid(number, element, name = "#"){
  var returnz = [];
  for (var i = 0; i < number[0]; i++) {
    returnz.push([]);
      for (var j = 0; j < number[1]; j++) {
        returnz[i].push(new element(name,[i,j]));
      }
  }
  return returnz;
}
function update(){
>>>>>>> cbf483f5be82ed2f3c7c75f852b96fdd64080be2
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

<<<<<<< HEAD
  function draw(grid){
=======



function draw(grid){

>>>>>>> cbf483f5be82ed2f3c7c75f852b96fdd64080be2
  //draws the orginal grid full of the default Basic class
  var str = "";
  var kewl = grid[0].length;
  var notkewl = grid.length;
  var top = notkewl;
  str += "+";
  for (var i = 0; i < kewl; i++) {
    top = str += "--";
  }
  str += "+<BR>";
  for (var i = 0; i < notkewl; i++) {
    str += "| ";
      for (var j = 0; j < kewl; j++) {
        grid[i][j];
        str += " " + grid[i][j];
      }
    str += "|<BR>";
  }
  str += "+";
  for (var i = 0; i < kewl; i++) {
    top = str += "--";
  }
  str += "+";
  return str;
}

<<<<<<< HEAD
  function room(number, element, name=" "){
    var open = [];
    for (var i = 0; i < number[0]; i++) {
      open.push([]);
      for (var j = 0; j < number[1]; j++) {
        open[i].push(new element(name,[i,j]));
      }
    }
    return open;
  }
  var room = room([50, 100], Basic);

  document.getElementById("paragraph").innerHTML = draw(room);
=======
  function choose(grid){

  }


  var grid = grid([50,100],Basic);
  document.getElementById("paragraph").innerHTML = draw(grid);
>>>>>>> cbf483f5be82ed2f3c7c75f852b96fdd64080be2

  //makes a timer that  upadtes the grid every 300 milisecounds
document.getElementById("button").onclick = function(){
  document.getElementById("paragraph").innerHTML = draw(grid);
<<<<<<< HEAD
myTimer();
=======
  myTimer();
}
>>>>>>> cbf483f5be82ed2f3c7c75f852b96fdd64080be2
}
