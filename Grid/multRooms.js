document.getElementById("button3").onclick = function(){
  for (var i = 0; i < 1; i++) {
    var oddNumber = randomOddNumber(map);
    var rand = randNum(map,oddNumber);
    var mid = midPoint(rand);
    console.log(mid);
    console.log(rand);
    var tst = room(map,rand);
    drawRoom(map,tst);
  }
  document.getElementById("paragraph").innerHTML = draw(map);
}
