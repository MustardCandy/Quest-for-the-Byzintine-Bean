document.getElementById("button3").onclick = function(){
<<<<<<< HEAD
  var room1 = null;
  var room2 = null;

  for (var i = 0; i < 10; i++) {
=======
  for (var i = 0; i < 9001; i++) {
>>>>>>> 2fa3c4f4bac49d8c8bfc87070995c994a11e8835
    var oddNumber = randomOddNumber(map);
    var rand = randNum(map,oddNumber);
    var mid = midPoint(rand);
    var tst = room(map,rand);
    drawRoom(map,tst);
    // if a room actually draws
    room1 = room2;
    room2 = {x: rand.xCen, y: rand.yCen};
    // if room draws & room1 is numbers
    // make a hall
    console.log(room1);
    console.log(room2);
  for (var i = Math.min(room1.x,room2.x); i <= Math.min(room1.x,room2.x); i++); {
    hallArr[i];
    for (var j = Math.max(room1.x,room1.x); j <= Math.max(room1.x,room2.x); j++) {
     hallArr[j];
    }
    return hallArr
  }
  }
  document.getElementById("paragraph").innerHTML = draw(map);
}
