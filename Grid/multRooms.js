document.getElementById("button3").onclick = function(){
  var ihtw = [];
  for (var i = 0; i < map.length; i++) {
    map[i]

    for (var j = 0; j < map.length; j++) {
      map[i]
      ihtw.push([i,j])
    }
  }

  for (var i = 0; i < 101; i++) {
    var oddNumber = randomOddNumber(map);
    var rand = randNum(map,oddNumber);
    console.log(rand);
    var tst = room(map, rand,ihtw);
    drawRoom(map, tst);
  }
  document.getElementById("paragraph").innerHTML = draw(map);
}
