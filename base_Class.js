class Basic {
  constructor(name,health,damage) {
    this._name = name;
    this._health = health;
    this._damage = damage;
  }
<<<<<<< HEAD
  toString(){return this._name}
=======

>>>>>>> 8c45f44904476e57e851dafcf1705ca5c725546e
  get name(){
    return this._name;
  }

  set name(name){
    this._name = name;
  }

  get health(){
    return this._health;
  }
<<<<<<< HEAD

=======
  
>>>>>>> 8c45f44904476e57e851dafcf1705ca5c725546e
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
