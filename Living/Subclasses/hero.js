//creats the "hero" that players will control
class Hero extends Basic {
  constructor(location) {
    super("X",20,5)
    this._location = location;
  }
}

function stringCheck(str) {
  if(str.includes("&#x2009")){
    return true;
  }else{
    return false;
  }

  }
  function possibleMoves(){


  }
