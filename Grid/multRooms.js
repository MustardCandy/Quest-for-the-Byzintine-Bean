document.getElementById("button3").onclick = function(){
  for (var i = 0; i < 101; i++) {
    var rand = randNumb(map);
    var tst = room(map, rand);
    drawRoom(map, tst);
  }
  document.getElementById("paragraph").innerHTML = draw(map);
}
