//random number generator for room location on grid
function room (map,roomz){
  //makes an empty array
  var retArr = [];
  //the for loop to randomly creat the rooms
  for (var i = roomz.yPos; i < roomz.y + roomz.yPos; i++) {
    for (var j = roomz.xPos; j < roomz.x + roomz.xPos; j++) {
      //pushes to the arrays
      retArr.push([i,j]);
    }
  }
  //returns the arrays
  return retArr;
}

//draws room on grid
function drawRoom (grid, room){
  //checks if a room can draw in this location
  for (var i = 0; i < room.length; i++) {
    if (map[room[i][0]][room[i][1]] == " ") {
    //if a room does not draw it returns false
      return false;
    }
  }
  for (var i = 0; i < room.length; i++) {
    map[room[i][0]][room[i][1]] = " ";
  }
  // console.log("yes");
  // console.log(room);
  //returns the draw room
  return room;
}

//button reset
//re-draws grid
document.getElementById("button2").onclick = function(){
  //a var for the randNum function
  var rand = randNum(map);
  //a var for the room function
  var tst = room(map, rand);
  //draws the room
  drawRoom(map, tst);
  //replaces the html element paragraph
  document.getElementById("paragraph").innerHTML = draw(map);
}
