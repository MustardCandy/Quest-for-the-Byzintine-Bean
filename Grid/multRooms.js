//button 3 will be final product of drawing the entire map with rooms and halls
document.getElementById("button3").onclick = function(){
  var room1 = null;
  var room2 = null;

  //this for loop makes the map try to draw x amount of rooms and halls
  for (var i = 0; i < 10; i++) {
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

    //aidans for loops for making hallways
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
