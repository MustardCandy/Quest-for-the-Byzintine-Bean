document.getElementById("button3").onclick = function(){
  for (var i = 0; i < 1001; i++) {
    var oddNumber = randomOddNumber(map);
    var rand = randNum(map,oddNumber);
    console.log(rand);
    var tst = room(grid, rand);
    drawRoom(map, tst);
  }
  document.getElementById("paragraph").innerHTML = draw(map);
}
