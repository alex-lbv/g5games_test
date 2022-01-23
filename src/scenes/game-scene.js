import {Dog} from "./dog";

export class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    this.count = 0;
  }

  create() {
    this.add.image(400, 300, 'back_five_dogs');

    new Dog(this, 180, 200, .5, -1, () => this.count++);
    new Dog(this, 580, 400, 1);
  }
}
