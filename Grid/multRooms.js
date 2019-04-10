document.getElementById("button3").onclick = function(){

  var hallArrY = [];
  //THE FOR LOOP THAT WILL make the rooms draw
  for (var i = 0; i < 100; i++) {
//a var for the randomoddnumber function
    var oddNumber = randomOddNumber(map);
    //a var for the randNum function
    var rand = randNum(map,oddNumber);
    //a var the the midpoint function
    var mid = midPoint(rand);
    //a var for the room functon
    var tst = room(map,rand);
    var dRoom =  drawRoom(map,tst);
    // if a room actually draws
//draws over the html text
  document.getElementById("paragraph").innerHTML = draw(map);
}
}
//hi
