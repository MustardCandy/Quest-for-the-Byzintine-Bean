document.getElementById("button3").onclick = function(){

  var room1 = null;
  var room2 = null;
  var hallArr = [];
  for (var i = 0; i < 10; i++) {


    var oddNumber = randomOddNumber(map);
    var rand = randNum(map,oddNumber);
    var mid = midPoint(rand);
    var tst = room(map,rand);
    drawRoom(map,tst);

    // if a room actually draws
    room1 = room2;
    room2 = {x: rand.xCen, y: rand.yCen};
    if(room1 !== null){
    console.log(room1.x);
    console.log(room2.x);
    // if room draws & room1 is numbers
    // make a hall
  for (var i = Math.min(room1.x,room2.x); i <= Math.min(room1.x,room2.x); i++); {
    hallArr[i];
    for (var j = Math.max(room1.x,room2.x); j <= Math.max(room1.x,room2.x); j++) {
     hallArr[j];
     hallArr.push([i,j])
    }
    console.log(hallArr);
  }
  }
}
  document.getElementById("paragraph").innerHTML = draw(map);
}
