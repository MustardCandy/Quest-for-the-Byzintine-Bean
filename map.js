//map creates a map for everything
//needs number, element, name
function map(number, element, name){
  var number = number;
  var gridArray = [];
   for (var i = 0; i < number; i++) {
         gridArray[i] = [];
     for (var j = 0; j < number; j++) {
       gridArray[i][j] = new element(name, [i,j]);
     }
  }
  return gridArray;
}
