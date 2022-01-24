import {Dog} from "./dog";
import FadeIn from "phaser3-rex-plugins/plugins/fade-in";

export class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    this.count = 0;
    this.gameEnd = false;
    console.log(this.gameEnd)
    this.endSceneItems = null;
  }

  transitions(progress, items) {
    // this.scene.launch('End');
    //
    // items.forEach((item) => {
    //   item.alpha = progress - 0.9;
    //   // console.log(progress)
    // })
  }

  create() {
    this.add.image(400, 300, 'back_five_dogs');

    new Dog(this, 180, 200, .5, -1, () => ++this.count);
    new Dog(this, 580, 400, 1, 1, () => ++this.count);

    this.endSceneItems = this.scene.get('End').children.list;
  }

  nextScene() {
    this.scene.transition({
      duration: 2000,
      target: 'End',
      onUpdate: (progress) => {
        this.endSceneItems.forEach((item) => {
          item.alpha = progress;
          console.log(this.scene)
          // console.log(progress)
        })
      },
    });
  }

  update() {
    if (this.count === 2) {
      this.gameEnd = true;
      this.nextScene();
      console.log(this.gameEnd);
      this.count = 0;
    }
  }
}
