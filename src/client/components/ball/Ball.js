export default class Ball {
  constructor(pos, vel) {
    this.pos = pos; // {x, y, h}
    this.vel = vel; // {x, h}
    this.key = Ball.getKey();
    this.rolling = false;
    this.active = true;
  }

  static getKey() {
    if (!Ball.counter) {
      Ball.counter = 0;
    }
    Ball.counter += 1;
    return Ball.counter;
  }
}
