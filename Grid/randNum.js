function randomOddNumber(grid){

    var randIntX = Math.random()*33;
    var randIntY = Math.random()*17;
    var randIntPosX = Math.random()*90;
    var randIntPosY = Math.random()*40;

    if(randIntX < 5){
      randIntX = 5;
    }
    if(randIntY < 5){
      randIntY = 5;
    }

    if(randIntX + randIntPosX >= 100){
      randIntPosX = randIntPosX - randIntX
    }
    if(randIntY + randIntPosY >= 49){
      randIntPosY = randIntPosY - randIntX
    }

//blank varibles that will be were istored the resualts of the randomOddNumber
    var roomArrX;
    var roomArrY;
    var roomPosX;
    var roomPosY;

//round the numbers down to integers
    randIntX = Math.floor(randIntX);
    randIntY = Math.floor(randIntY);
    randIntPosX = Math.floor(randIntPosX);
    randIntPosY = Math.floor(randIntPosY);

//the varibles that store the remainder of their corrosponding varibles
    var remainderX = randIntX %2;
    var remainderY = randIntY %2;
    var remainderPosX = randIntPosX %2;
    var remainderPosY = randIntPosY %2;

    //odd number for the leangth
    if(remainderX == 1){
       randIntX;
      roomArrX = randIntX;
    }else if(remainderX == 0){
       randIntX ++;
      roomArrX = randIntX;
    }

    //odd number for the heigth
    if(remainderY == 1){
      randIntY;
      roomArrY = randIntY;
    }else if(remainderY == 0){
      randIntY ++;
  }

    //odd number for the x coordinate
    if(remainderPosX == 1){
       randIntPosX;
      roomPosX = randIntPosX;
    }else if(remainderPosX == 0){
       randIntPosX ++;
      roomPosX = randIntPosX;
    }

    //odd number for the y coordinate
    if(remainderPosY == 1){
       randIntPosY;
      roomPosY = randIntPosY;
    }else if(remainderPosY == 0){
       randIntPosY ++;
      roomPosY = randIntPosY;
    }
    var roomArr = {
      x: roomArrX,
      y: roomArrY,
      PosY : roomPosY,
      PosX : roomPosX
    }

//  console.log(roomArr);
      return roomArr;
  }

  //random number generator to determine size of rooms
  //roomArr is still return nothing ask mr malorie why
  function randNum(grid,roomArr){
    var roomz = {
      x: roomArr.x,
      y: roomArr.y,
      yPos: roomArr.PosY,
      xPos: roomArr.PosX
    }
    if(roomz.y == undefined){
      roomz.y = 7
    }
    roomz.x = Math.floor(roomz.x);
    roomz.y = Math.floor(roomz.y);

    roomz.xPos = Math.floor(roomz.xPos);
    roomz.yPos = Math.floor(roomz.yPos);
      return roomz;
  }

  function midPoint(roomz){
    roomz.xCen = roomz.xPos + Math.floor(roomz.x/2);
    roomz.yCen = roomz.yPos + Math.floor(roomz.y/2);
  }

  //here
