//random number generator for room location on grid
function room (map,roomz){
  var retArr = [];
  for (var i = roomz.yPos; i < roomz.y + roomz.yPos; i++) {
    for (var j = roomz.xPos; j < roomz.x + roomz.xPos; j++) {
      retArr.push([i,j]);
    }
  }
  return retArr;
}

//draws room on grid
function drawRoom (grid, room){
  for (var i = 0; i < room.length; i++) {
    if (map[room[i][0]][room[i][1]] == " ") {
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
