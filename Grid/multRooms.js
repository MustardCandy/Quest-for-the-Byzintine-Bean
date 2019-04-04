document.getElementById("button3").onclick = function(){
  for (var i = 0; i < 10; i++) {
    var oddNumber = randomOddNumber(map);
    var rand = randNum(map,oddNumber);
    console.log(rand);
    var mid = midPoint(map,rand);
    console.log(mid);
    var tst = room(map,rand);
    drawRoom(map,tst);
  }
  document.getElementById("paragraph").innerHTML = draw(map);
}
//here
