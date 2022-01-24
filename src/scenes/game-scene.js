import {Dog} from "./dog";

export class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    this.count = 0;
    this.gameEnd = false;
    console.log(this.gameEnd)
    this.endSceneItems = null;
  }

  create() {
    this.add.image(500, 300, 'back_five_dogs');

    new Dog(this, 140, 190, .6, -1, () => ++this.count);
    new Dog(this, 500, 250, .6, -1, () => ++this.count);
    new Dog(this, 900, 180, .6, 1, () => ++this.count);
    new Dog(this, 930, 530, .6, 1, () => ++this.count);
    new Dog(this, 200, 510, .6, 1, () => ++this.count);

    this.endSceneItems = this.scene.get('End').children.list;
  }

  nextScene() {
    this.scene.transition({
      duration: 1500,
      target: 'End',
      onUpdate: (progress) => {
        this.endSceneItems.forEach((item) => {
          item.alpha = progress - 0.1;
        })
      },
    });
  }

  update() {
    if (this.count === 5) {
      this.gameEnd = true;
      this.nextScene();
      console.log(this.gameEnd);
      this.count = 0;
    }
  }
}
