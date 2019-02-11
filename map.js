//this page creats the grid
var map = grid([50,100],Basic);
  preset(map)

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

  function grid(number, element, name="#"){
    var open = [];
    for (var i = 0; i < number[0]; i++) {
      open.push([]);
      for (var j = 0; j < number[1]; j++) {
        open[i].push(new element(name,[i,j]));
      }
    }
    return open;
  }

  function preset(grid){
    var amount = grid.length;
    var choices = [];

    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid.length; j++) {
        choices.push([i,j])
      }
    }
    for (var i = 0; i < 150; i++) {
      var ran = Math.floor(Math.random()* choices.length);
      var cord = choices[ran];
      choices.splice(ran,1);
      grid[cord[0]][cord[1]] = new Hobbit(cord);
    }
    for (var i = 0; i < 10; i++) {
      var ran = Math.floor(Math.random()* choices.length);
      var cord = choices[ran];
      choices.splice(ran,1);
      grid[cord[0]][cord[1]] = new Nazgul(cord);
    }
  }

  //makes a timer that  upadtes the grid every 300 milisecounds
document.getElementById("button2").onclick = function(){
  document.getElementById("paragraph").innerHTML = draw(map);
myTimer();
}
