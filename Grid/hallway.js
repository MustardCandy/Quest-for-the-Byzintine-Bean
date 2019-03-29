//function hallway will create 1 by x room to connect rooms to rooms
//hallways will need a function that is passed grid
//make rooms always an odd length so the rooms come out of middle
function hallUno(map) {
  var blnkArr = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      blnkArr.push([i,j]);
    }
  }
  return blnkArr;
}

function hallDos(map) {
  var arrBlnk = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      arrBlnk.push([i,j]);
    }
  }
  return arrBlnk;
}
