export class BootScene extends Phaser.Scene {
  constructor() {
    super('End');
  }

  preload() {
    this.load.image('btn', '../src/assets/btn.png');
    this.load.image('doggy', '../src/assets/doggy.png');
    this.load.image('back_five_dogs', '../src/assets/back_five_dogs.jpg');
    this.load.image('char', '../src/assets/char.png');
    this.load.spritesheet('loader', '../src/assets/loader.png', {
      frameWidth: 165,
      frameHeight: 184,
      endFrame: 8
    });
  }

  transitionOut(progress, items) {
    items.forEach((item) => {
      item.alpha = 1 - progress
    })

    if (progress === 1) {
      this.scene.remove('Start')
    }
  }

  create() {
    this.scene.launch('Game').launch('Start').stop();

    const startSceneItems = this.scene.get('Start').children.list
    console.log(startSceneItems)
    this.scene.transition({
      duration: 2000,
      target: 'Game',
      onUpdate: (progress) => {this.transitionOut(progress, startSceneItems)}
    })
  }
}
