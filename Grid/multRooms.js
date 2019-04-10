document.getElementById("button3").onclick = function(){

  var hallArrY = [];
  for (var i = 0; i < 100; i++) {

    var oddNumber = randomOddNumber(map);
    var rand = randNum(map,oddNumber);
    var mid = midPoint(rand);
    var tst = room(map,rand);
    var dRoom =  drawRoom(map,tst);
    // if a room actually draws

  document.getElementById("paragraph").innerHTML = draw(map);
}
}
//hi
