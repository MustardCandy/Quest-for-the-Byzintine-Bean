function hallWayX(){
  var room1 = null;
  var room2 = null;
  var hallArrX = [];

  if(dRoom !== false){
  room1 = room2;
  room2 = {x: rand.xCen, y: rand.yCen};


  if(room1 !== null){
    console.log(room1);
    console.log(room2);
  // if room draws & room1 is numbers
  // make a hall
for (var i = Math.min(room1.x,room2.x); i <= Math.max(room1.x,room2.x); i++); {
  for (var j = Math.min(room1.x,room2.x); j <= Math.max(room1.x,room2.x); j++) {

   hallArrX.push([i,j])
   console.log(hallArrX);
  }
}
}
}
}

function hallWayY(){
  var room1 = null;
  var room2 = null;
  var hallArrY = [];
  if(dRoom !== false){
  room1 = room2;
  room2 = {x: rand.xCen, y: rand.yCen};
  if(room1 !== null){
  for (var i = Math.min(room1.y,room2.y); i <= Math.max(room1.y,room2.y); i++); {
    for (var j = Math.min(room1.y,room2.y); j <= Math.max(room1.y,room2.y); j++) {
     hallArrY.push([i,j])
     console.log(hallArrY);
    }
  }
}
}
}
