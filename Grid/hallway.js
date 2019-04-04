//function hallway will create 1 by x room to connect rooms to rooms
//hallways will need a function that is passed grid
//make rooms always an odd length so the rooms come out of middle
function hallX(map) {
  var room1 = 3;
  var room2 = 8;
  var dif = room2 - room1;
  if (dif > 0) {
    room1 ++;
    dif --;
  }
  console.log(dif);
}

function hallY(map) {
  var room3 = 23;
  var room4 = 83;
  var dif = room4 - room3;
  if (dif > 0) {
    room1 ++;
    dif --;
  }
  console.log(dif);
}
