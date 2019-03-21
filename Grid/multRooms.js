document.getElementById("button3").onclick = function(){
  for (var i = 0; i < 101; i++) {
    var oddNumber = randomOddNumber(map);
    var rand = randNum(map,oddNumber);
    var tst = room(grid, rand);
    drawRoom(map, tst);
  }
  document.getElementById("paragraph").innerHTML = draw(map);
}
