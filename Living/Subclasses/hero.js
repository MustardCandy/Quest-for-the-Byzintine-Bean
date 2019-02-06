//creats the "hero" that players will control
class Hero extends Basic {
  constructor(posX,posY) {
    super("X",20,5)
    this._posX = posX;
    this._posY = posY;
  }
}
