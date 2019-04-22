//random number generator for room location on grid
function room (map){
  var roomz = object();
  var retArr = [];
  for (var i = roomz.yPos; i < roomz.y + roomz.yPos; i++) {//ask lamorie why
    for (var j = roomz.xPos; j < roomz.x + roomz.xPos; j++) {//rooms is undefined
      retArr.push([i,j]);
    }
  }
  return retArr;
}
console.log(roomz);

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
// document.getElementById("button2").onclick = function(){
//   var rand = randNum(map);
//   var tst = room(map, rand);
//   drawRoom(map, tst);
//   document.getElementById("paragraph").innerHTML = draw(map);
// }
