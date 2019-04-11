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

    //a var for the return of the draw room function
    var dRoom = drawRoom(map,tst);

    // if a room actually draws
    var hallWay2X = hallWayX(rand,room,dRoom);

    //a var for the hallway X
    var hallWay2Y = hallWayY(rand,room,dRoom);

    //draws over the html text
  document.getElementById("paragraph").innerHTML = draw(map);
}
}
//hi

//why aren't you at school Aidan????
