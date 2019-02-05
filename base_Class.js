class Basic {
  constructor(name,health,damage) {
    this._name = name;
    this._health = health;
    this._damage = damage;
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
