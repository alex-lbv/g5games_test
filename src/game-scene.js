import {Dog} from "./dog";
import FadeOutDestroy from "phaser3-rex-plugins/plugins/fade-out-destroy";
import FadeIn from "phaser3-rex-plugins/plugins/fade-in";

export class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');

    this.count = 0;
    this.endSceneItems = null;
    this.startSceneItems = null;
    this.btn = null;
    this.textBtn = null;
  }

  preload() {
    this.load.image('btn', '../src/assets/btn.png');
    this.load.image('doggy', '../src/assets/doggy.png');
    this.load.image('logo', '../src/assets/logo.png');
    this.load.image('doggy-reverse', '../src/assets/doggy-reverse.png');
    this.load.image('back_five_dogs', '../src/assets/back_five_dogs.jpg');
    this.load.image('char', '../src/assets/char.png');
    this.load.spritesheet('select', '../src/assets/select.png', {
      frameWidth: 165,
      frameHeight: 184,
      endFrame: 8
    });
  }

  create() {
    this.add.image(500, 300, 'back_five_dogs');

    new Dog(this, 140, 190, .6, -1, () => ++this.count);
    new Dog(this, 500, 250, .6, -1, () => ++this.count);
    new Dog(this, 900, 180, .6, 1, () => ++this.count);
    new Dog(this, 930, 530, .6, 1, () => ++this.count);
    new Dog(this, 200, 510, .6, 1, () => ++this.count);

    this.startSceneItems = [
      this.add.rectangle(500, 300, window.innerWidth, window.innerHeight, 0x000000),
      this.add.text(330, 200, '5 Hidden Dogs', {font: '600 50px Arial', fill: '#ffffff'}),
      this.add.text(320, 300, 'Can you spot them', {font: '600 50px Arial', fill: '#ffffff'}),
      this.add.image(730, 220, 'doggy-reverse').setSize(10, 10),
    ];

    this.endSceneItems = [
      this.add.rectangle(500, 300, window.innerWidth, window.innerHeight, 0x000000),
      this.add.image(510, 100, 'logo').setScale(.7),
      this.add.image(170, 310, 'char').setScale(.7),
      this.add.text(340, 200, 'Great Job', {font: '600 70px Arial', fill: '#faf1b8'}),
      this.add.text(350, 300, 'Can you solve', {font: '600 50px Arial', fill: '#ffffff'}),
      this.add.text(340, 360, 'every mystery?', {font: '600 50px Arial', fill: '#ffffff'}),
    ];

    this.endSceneItems.forEach((item) => {
      item.alpha = 0;
    })

    this.startSceneItems.forEach((item) => {
      FadeIn(item, 1000, 0.9);
    })

    setTimeout(() => {
      this.startSceneItems.forEach((item) => {

        if (item === this.startSceneItems[3] || item === this.startSceneItems[0]) {
          this.tweens.add({
            targets: item,
            ease: 'Linear',
            scaleX: 1.1,
            scaleY: 1.1,
            duration: 5000,
          });
        } else {
          this.tweens.add({
            targets: item,
            ease: 'Linear',
            x: 300,
            scaleX: 1.1,
            scaleY: 1.1,
            duration: 5000,
          });
        }
      })
    }, 3000);

    setTimeout(() => {
      this.startSceneItems.forEach((item) => {
        FadeOutDestroy(item, 2000);
      })
    }, 5000);

    this.btn = this.add.image(510, 530, 'btn');
    this.textBtn = this.add.text(405, 500, 'Play Now', {font: '50px Arial', fill: '#faf1b8'});
    this.btn.setInteractive();

    this.btn.on('pointerdown', () => {
      console.log('click');
    })

  }

  addBtnAnimate() {
    this.tweens.add({
      targets: this.btn,
      ease: 'Linear',
      scaleX: 1.1,
      scaleY: 1.1,
      duration: 750,
      yoyo: true,
      loop: -1
    });

    this.tweens.add({
      targets: this.textBtn,
      ease: 'Linear',
      x: 395,
      y: 497,
      scale: 1.1,
      duration: 750,
      yoyo: true,
      loop: -1
    });
  }

  update() {
    if (this.count === 5) {
      this.endSceneItems.forEach((item) => {
        this.tweens.add({
          targets: item,
          ease: 'Linear',
          alpha: .9,
          duration: 1000,
        });
      });

      this.addBtnAnimate();
      this.count = 0;
    }
  }
}
