

  function randomOddNumber(grid){

    var randIntX = Math.random()*50;
    var randIntY = Math.random()*26;
    var randIntPosX = Math.random()*99;
    var randIntPosY = Math.random()*99;

    var roomArrX;
    var roomArrY;
    var roomPosX;
    var roomPosY;

    randIntX = Math.floor(randIntX);
    randIntY = Math.floor(randIntY);
    randIntPosX = Math.floor(randIntPosX);
    randIntPosY = Math.floor(randIntPosY);

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
      PosY : roomArrY,
      PosX : roomArrX
    }

  //
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
    roomz.x = Math.floor(roomz.x);
    roomz.y = Math.floor(roomz.y);

    roomz.xPos = Math.floor(roomz.xPos);
    roomz.yPos = Math.floor(roomz.yPos);
      return roomz;
  }
