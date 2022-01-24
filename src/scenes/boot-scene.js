import FadeOutDestroy from "phaser3-rex-plugins/plugins/fade-out-destroy";

export class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');

    this.startSceneItems = null;

  }

  preload() {
    this.load.image('btn', '../src/assets/btn.png');
    this.load.image('doggy', '../src/assets/doggy.png');
    this.load.image('doggy-reverse', '../src/assets/doggy-reverse.png');
    this.load.image('back_five_dogs', '../src/assets/back_five_dogs.jpg');
    this.load.image('char', '../src/assets/char.png');
    this.load.spritesheet('loader', '../src/assets/loader.png', {
      frameWidth: 165,
      frameHeight: 184,
      endFrame: 8
    });
  }

  transitions(progress, items) {
    items.forEach((item) => {
      item.alpha = progress - 0.1;
    })

    if (progress === 1) {
      setTimeout(() => {
        this.scene.get('Start').tweens.add({
          targets: items,
          scaleX: 1.1,
          scaleY: 1.1,
          ease: 'Linear',
          duration: 5000,
        });
      }, 3000);

      setTimeout(() => {
        items.forEach((item) => {
          FadeOutDestroy(item, 2000);
        })
      }, 4000);
    }
  }

  create() {
    this.scene.launch('Game').launch('Start').stop();
    // this.scene.start('End');
    this.startSceneItems = this.scene.get('Start').children.list;

    this.scene.transition({
      duration: 500,
      target: 'Start',
      onUpdate: (progress) => {
        this.transitions(progress, this.startSceneItems)
      },
    });
  }
}
