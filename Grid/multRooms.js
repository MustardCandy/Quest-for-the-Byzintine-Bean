document.getElementById("button3").onclick = function(){
  for (var i = 0; i < 101; i++) {
    var oddNumber = randomOddNumber(map);
<<<<<<< HEAD

=======
>>>>>>> 988feba72dee62ad12e47b9bdee03b826fcb4d79
    var rand = randNum(map,oddNumber);
    var tst = room(grid, rand);
    drawRoom(map, tst);
  }
  document.getElementById("paragraph").innerHTML = draw(map);
}
