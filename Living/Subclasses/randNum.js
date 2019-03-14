<<<<<<< HEAD
//random odd number generator for x, y, xPos, & yPos
function randomOddNumber(number){
  var randInt = Math.random()*number;
  randInt = Math.floor(randInt);
  console.log(randInt);
  var remainder = randInt %2;
  console.log(remainder);
  if(remainder == 1){
    return remainder;
  }else if(remainder == 0){
    return remainder + 1;
  }
}

=======
const isValidRoomPlacement = (grid, {x, y, width = 1, height = 1}) => {
		// check if on the edge of or outside of the grid
		if (y < 1 || y + height > grid.length - 1) {
			return false;
		}
		if (x < 1 || x + width > grid[0].length - 1) {
			return false;
		}

		for (let i = y - 1; i < y + height + 1; i++) {
			for (let j = x - 1; j < x + width + 1; j++) {
				if (grid[i][j].type === 'floor') {
					return false;
				}
			}
		}
		// all grid cells are clear
		return true;
  };

//random number generator for x, y, xPos, & yPos
>>>>>>> a785b36b42da5b6d6696eff9a70eef50b1df5ad6
function randNum(grid){
  var roomz = {
    x: Math.random() *grid[0].length/4,
    y: Math.random() *grid.length/4
  }
  roomz.xPos = Math.random() *(grid[0].length - roomz.x);
  roomz.yPos = Math.random() *(grid.length - roomz.y);

  roomz.x = Math.floor(roomz.x);
  roomz.y = Math.floor(roomz.y);

  roomz.xPos = Math.floor(roomz.xPos);
  roomz.yPos = Math.floor(roomz.yPos);

  return roomz;
}
