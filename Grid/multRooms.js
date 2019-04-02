document.getElementById("button3").onclick = function(){
  for (var i = 0; i < 9001; i++) {
    var oddNumber = randomOddNumber(map);
    var rand = randNum(map,oddNumber);
    var mid = midPoint(rand)
    console.log(mid);
    var tst = room(grid, rand);
    console.log(tst)
    drawRoom(map, tst);
  }
  document.getElementById("paragraph").innerHTML = draw(map);
}
