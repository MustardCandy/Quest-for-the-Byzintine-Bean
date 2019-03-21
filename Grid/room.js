//random number generator for room location on grid
function room (grid, randNum){
  var retArr = [];
  for (var i = randNum.yPos; i < randNum.y + randNum.yPos; i++) {
    for (var j = randNum.xPos; j < randNum.x + randNum.xPos; j++) {
      retArr.push([i,j]);
    }
  }
  return retArr;
}

//draws room on map
function drawRoom (map,room){
  for (var i = 0; i < room.length; i++) {
    if (map[room[i][0]][room[i][1]] == " "){
      return draw(map);
    }
  }
  for (var i = 0; i < room.length; i++) {
    map[room[i][0]][room[i][1]] = " ";
  }
  return room;
}

//button reset
//re-draws grid
document.getElementById("button2").onclick = function(){
  var rand = randNum(map);
  var tst = room(map, rand);
  drawRoom(map, tst);
  document.getElementById("paragraph").innerHTML = draw(map);
}
