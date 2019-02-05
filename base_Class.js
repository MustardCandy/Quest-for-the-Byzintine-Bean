class Basic {
  constructor(name,health,damage) {
    this._name = name;
    this._health = health;
    this._damage = damage;
  }
<<<<<<< HEAD
<<<<<<< HEAD
  toString(){return this._name}
=======

>>>>>>> 8c45f44904476e57e851dafcf1705ca5c725546e
=======
  toString(){return this._name}
>>>>>>> dbbfa501ba358cc61d5b56e879b468ad35490c87
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
<<<<<<< HEAD

=======
  
>>>>>>> 8c45f44904476e57e851dafcf1705ca5c725546e
=======

>>>>>>> dbbfa501ba358cc61d5b56e879b468ad35490c87
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
