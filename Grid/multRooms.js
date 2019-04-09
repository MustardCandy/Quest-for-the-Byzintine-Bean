document.getElementById("button3").onclick = function(){

  var room1 = null;
  var room2 = null;

  var hallArrY = [];
  for (var i = 0; i < 10; i++) {


    var oddNumber = randomOddNumber(map);
    var rand = randNum(map,oddNumber);
    var mid = midPoint(rand);
    var tst = room(map,rand);
    var hallwayX = hallX(rand)
    drawHallX(hallwayX)
    drawRoom(map,tst);

  function hallX(rand){
    var room1 = null;
    var room2 = null;
    var hallArrX = [];
    // if a room actually draws
    room1 = room2;
    room2 = {x: rand.xCen, y: rand.yCen};
    if(room1 !== null){
    console.log(room1.x);
    console.log(room2.x);
    // if room draws & room1 is numbers
    // make a hall
  for (var i = Math.min(room1.x,room2.x); i <= Math.max(room1.x,room2.x); i++); {

    for (var j = Math.min(room1.x,room2.x); j <= Math.max(room1.x,room2.x); j++) {

     hallArrX.push([i,j])
    }
  }
    console.log(hallArrX);
    return hallArrX
}
}
  function hallY(rand){
    var room1 = null;
    var room2 = null;
    var hallArrY = [];
    room1 = room2;
    room2 = {x: rand.xCen, y: rand.yCen};
      if(room1 !== null){
  for (var i = Math.min(room1.y,room2.y); i <= Math.max(room1.y,room2.y); i++); {

    for (var j = Math.min(room1.y,room2.y); j <= Math.max(room1.y,room2.y); j++) {

     hallArrY.push([i,j])
    }
  }
    console.log(hallArrY);
    return hallArry;
  }
}
function drawHallX (grid,hallwayX){
  for (var i = 0; i < hallwayX.length; i++) {
    if (map[hallwayX[i][0]][hallwayX[i][1]] == " ") {
      return draw(map);
    }
  }
  for (var i = 0; i < hallwayX.length; i++) {
    map[hallwayX[i][0]][hallwayX[i][1]] = " ";
  }
  return room;
}
  document.getElementById("paragraph").innerHTML = draw(map);
}
}
//hi
