import {Dog} from "./dog";
import {logPlugin} from "@babel/preset-env/lib/debug";

export class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');

    this.count = 0;
    this.orientation = null;
    this.GAME_WIDTH = 767;
    this.GAME_HEIGHT = 1075;

    this.orientation = null;

    this.dogs = [
      {
        PORTRAIT: {
          x: 200,
          y: 310,
          scale: .8,
          direction: -1,
        },
        LANDSCAPE: {
          x: 475,
          y: 190,
          scale: .5,
          direction: -1,
        }
      },
      {
        PORTRAIT: {
          x: 490,
          y: 540,
          scale: .6,
          direction: 1,
        },
        LANDSCAPE: {
          x: 200,
          y: 350,
          scale: .5,
          direction: 1,
        }
      },
      {
        PORTRAIT: {
          x: 620,
          y: 350,
          scale: .6,
          direction: 1,
        },
        LANDSCAPE: {
          x: 160,
          y: 150,
          scale: .5,
          direction: -1,
        }
      },
      {
        PORTRAIT: {
          x: 200,
          y: 650,
          scale: .9,
          direction: 1,
        },
        LANDSCAPE: {
          x: 830,
          y: 145,
          scale: .5,
          direction: 1,
        }
      },
      {
        PORTRAIT: {
          x: 490,
          y: 800,
          scale: 1,
          direction: 1,
        },
        LANDSCAPE: {
          x: 870,
          y: 345,
          scale: .5,
          direction: 1,
        }
      },
    ];

    this.dogsList = [];
  }

  preload() {
    this.load.image('btn', '../src/assets/btn.png');
    this.load.image('logo', '../src/assets/logo.png');
    this.load.image('doggy', '../src/assets/doggy.png');
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
    this.orientation = this.scale.orientation

    this.width = this.scale.gameSize.width;
    this.height = this.scale.gameSize.height;

    this.parent = new Phaser.Structs.Size(this.width, this.height);
    this.sizer = new Phaser.Structs.Size(this.GAME_WIDTH, this.GAME_HEIGHT, Phaser.Structs.Size.HEIGHT_CONTROLS_WIDTH, this.parent);

    this.parent.setSize(this.width, this.height);
    this.sizer.setSize(this.width, this.height);

    this.updateCamera();

    this.background = this.add.image(0, 0, 'back_five_dogs').setOrigin(0, 0);

    this.dogs.map((dog) => {
      // let {x: xL, y: yL, scale: sL, direction: dL} = dog.LANDSCAPE;
      let {x: xP, y: yP, scale: sP, direction: dP} = dog.PORTRAIT;

      this.dogsList.push(new Dog(this, xP, yP, sP, dP, () => ++this.count));
    });

    this.startSceneItems = [
      this.add.rectangle(0, 0, window.innerWidth, window.innerHeight, 0x000000).setOrigin(0, 0),
      this.add.text(70, 370, '5 Hidden Dogs', {font: '600 70px Arial', fill: '#ffffff'}),
      this.add.text(50, 500, 'Can you spot them', {font: '600 70px Arial', fill: '#ffffff'}),
      this.add.image(630, 410, 'doggy-reverse').setSize(15, 15),
    ];

    this.endSceneItems = [
      this.add.rectangle(0, 0, window.innerWidth, window.innerHeight, 0x000000).setOrigin(0, 0),
      this.add.image(380, 180, 'logo'),
      // this.add.image(400, 310, 'char').setScale(-.8, .8),
      this.add.image(370, 640, 'char').setScale(-.8, .8),
      // this.add.text(340, 200, 'Great Job', {font: '600 70px Arial', fill: '#faf1b8'}),
      this.add.text(110, 570, 'Great Job', {font: '600 120px Arial', fill: '#fce043'}),
      this.add.text(110, 720, 'Can you solve', {font: '600 80px Arial', fill: '#ffffff'}),
      this.add.text(100, 810, 'every mystery?', {font: '600 80px Arial', fill: '#ffffff'}),
    ];

    // this.btn = this.add.image(510, 530, 'btn');
    this.btn = this.add.image(225, 940, 'btn').setOrigin(0, 0);
    // this.textBtn = this.add.text(405, 500, 'Play Now', {font: '50px Arial', fill: '#faf1b8'});
    this.textBtn = this.add.text(280, 975, 'Play Now', {font: '600 50px Arial', fill: '#faf1b8'}).setOrigin(0, 0);
    this.btn.setInteractive();

    this.startSceneItems.forEach((item) => {
      item.alpha = 0;
    })

    this.endSceneItems.forEach((item) => {
      item.alpha = 0;
    })

    this.startSceneItems.forEach((item) => {
      this.tweens.add({
        targets: item,
        ease: 'Linear',
        alpha: 0.9,
        duration: 1000,
      });
    })

    setTimeout(() => {
      this.startSceneItems.forEach((item) => {

        if (item === this.startSceneItems[3] || item === this.startSceneItems[0]) {
          this.tweens.add({
            targets: item,
            ease: 'Linear',
            scaleX: 1.3,
            scaleY: 1.3,
            duration: 5000,
          });
        } else {
          this.tweens.add({
            targets: item,
            ease: 'Linear',
            x: item.x - 20,
            scaleX: 1.1,
            scaleY: 1.1,
            duration: 5000,
          });
        }
      })
    }, 4500);

    setTimeout(() => {
      this.startSceneItems.forEach((item) => {
        this.tweens.add({
          targets: item,
          ease: 'Linear',
          alpha: 0,
          duration: 2000,
        });
      })
    }, 5000);

    this.btn.on('pointerdown', () => {
      console.log('click');
    })

    this.scale.on('orientationchange', this.checkOrientation, this);
    this.scale.on('resize', this.resize, this);
    this.checkOrientation(this.scale.orientation);

    if (this.orientation === Phaser.Scale.LANDSCAPE) {
      this.startOptionsLandScape();
    }
  }

  checkOrientation(orientation) {
    this.orientation = orientation;
    this.scale.refresh();
    if (orientation === Phaser.Scale.PORTRAIT) {
      this.startOptionsPortrait();
    } else if (orientation === Phaser.Scale.LANDSCAPE) {
      this.startOptionsLandScape();
    }
  }

  startOptionsPortrait() {
    this.background.setDisplaySize(this.GAME_WIDTH * 2, this.GAME_HEIGHT);
    this.background.setPosition(-530, 0);

    this.dogsList.forEach((dog, index) => {
      let {x, y, scale, direction} = this.dogs[index].PORTRAIT;

      dog.changeOptions(x, y, scale, direction)
    });

    this.btn.setPosition(225, 940);
    this.btn.scale = 1.2;
  }

  startOptionsLandScape() {
    this.parent.setSize(this.scale.gameSize.width, this.scale.gameSize.height);
    this.sizer.setAspectMode(Phaser.Structs.Size.NONE)
    this.sizer.setSize(this.parent.width, this.parent.height);
    this.background.setDisplaySize(this.parent.width, this.parent.height);
    this.background.setPosition(0, 0);

    this.dogsList.forEach((dog, index) => {
      let {x, y, scale, direction} = this.dogs[index].LANDSCAPE;

      dog.changeOptions(x, y, scale, direction)
    });

    this.btn.setPosition(window.innerWidth / 2 - 100, window.innerHeight - 100);
    this.btn.scale = .7;
  }

  resize(gameSize) {
    const width = gameSize.width;
    const height = gameSize.height;

    this.parent.setSize(width, height);
    this.sizer.setSize(width, height);

    this.updateCamera();
  }

  updateCamera() {
    let camera = this.cameras.main;
    let x = 0;
    let y = 0;
    let scaleX = this.sizer.width / this.GAME_WIDTH;
    let scaleY = this.sizer.height / this.GAME_HEIGHT;

    if (this.orientation === Phaser.Scale.PORTRAIT) {
      x = Math.ceil((this.parent.width - this.sizer.width) * 0.5);

      camera.setViewport(x, y, this.sizer.width, this.sizer.height);
      camera.setZoom(Math.max(scaleX, scaleY));
      camera.centerOn(this.GAME_WIDTH / 2, this.GAME_HEIGHT / 2).setOrigin(0.5, 0.5);
    } else if (this.orientation === Phaser.Scale.LANDSCAPE) {
      camera.setViewport(x, y, this.GAME_WIDTH * 2, this.GAME_HEIGHT);
      camera.setZoom(1);
      camera.centerOn(this.GAME_WIDTH, this.GAME_HEIGHT / 2).setOrigin(0, 0);
    }
  }

  addBtnAnimate() {
    this.tweens.add({
      targets: this.btn,
      ease: 'Linear',
      scaleX: 1.3,
      scaleY: 1.3,
      x: this.btn.x - 10,
      duration: 750,
      yoyo: true,
      loop: -1
    });

    this.tweens.add({
      targets: this.textBtn,
      ease: 'Linear',
      x: this.textBtn.x - 10,
      y: this.textBtn.y + 5,
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
