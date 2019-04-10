document.getElementById("button3").onclick = function(){

  var room1 = null;
  var room2 = null;
  var hallArrX = [];
  var hallArrY = [];
  for (var i = 0; i < 100; i++) {


    var oddNumber = randomOddNumber(map);
    var rand = randNum(map,oddNumber);
    var mid = midPoint(rand);
    var tst = room(map,rand);
    var dRoom =  drawRoom(map,tst);
    // if a room actually draws
    if(dRoom !== false){
    room1 = room2;
    room2 = {x: rand.xCen, y: rand.yCen};


    if(room1 !== null){
      console.log(room1);
      console.log(room2);
    // if room draws & room1 is numbers
    // make a hall
  for (var i = Math.min(room1.x,room2.x); i <= Math.max(room1.x,room2.x); i++); {
    for (var j = Math.min(room1.x,room2.x); j <= Math.max(room1.x,room2.x); j++) {

     hallArrX.push([i,j])
     console.log(hallArrX);
    }
  }

  for (var i = Math.min(room1.y,room2.y); i <= Math.max(room1.y,room2.y); i++); {
    for (var j = Math.min(room1.y,room2.y); j <= Math.max(room1.y,room2.y); j++) {
     hallArrY.push([i,j])
     console.log(hallArrY);
    }
  }
}
}
  document.getElementById("paragraph").innerHTML = draw(map);
}
}
//hi
