class Basic {
  //makes the base class that the grid draws off of and that the rest of the classes will based off off
  constructor(name,health,damage) {
    this._name = name;
    //allows you to give somthing a name
    this._health = health;
    //alows somthing to have a health value
    this._damage = damage;
    //allows somthing that has damage
  }
  //bellow are getters and setters for the basic class {-}7
  toString(){
    return this._name
  }
  get name(){
    return this._name;
  }
  set name(name){
    this._name = name;
  }
  get health(){
    return this._health;
  }
  set health(health){
    this._health = health;
  }
  get posX(){
    return this._posX;
  }
  set posX(posX){
    this._posX = posX;
  }
  get posY(){
    return this._posy;
  }
  set posX(posY){
    this._posY = posY;
  }
  get damage(){
    return this._damage;
  }
  set damage(damage){
    this._damage = damage;
  }
}
