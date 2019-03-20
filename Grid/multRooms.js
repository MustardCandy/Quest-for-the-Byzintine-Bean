document.getElementById("button3").onclick = function(){
  for (var i = 0; i < 101; i++) {
    var oddNumber = randomOddNumber(map);
    console.log(oddNumber)
    var rand = randNum(map,oddNumber);
    console.log(rand);
    var tst = room(grid, rand);
    drawRoom(map, tst);
  }
  document.getElementById("paragraph").innerHTML = draw(map);
}
