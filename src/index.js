import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('back_five_dogs', '../src/assets/back_five_dogs.jpg');
  this.load.image('btn', '../src/assets/btn.png');
  this.load.image('char', '../src/assets/char.png');
  this.load.image('circle', '../src/assets/circle.png');
  this.load.image('circle_1', '../src/assets/circle_1.png');
  this.load.image('circle_2', '../src/assets/circle_2.png');
  this.load.image('circle_3', '../src/assets/circle_3.png');
  this.load.image('circle_4', '../src/assets/circle_4.png');
  this.load.image('circle_5', '../src/assets/circle_5.png');
  this.load.image('circle_6', '../src/assets/circle_6.png');
  this.load.image('circle_7', '../src/assets/circle_7.png');
  this.load.image('circle_8', '../src/assets/circle_8.png');
  this.load.image('doggy', '../src/assets/doggy.png');
}

function create() {
  this.add.image(400, 300, 'back_five_dogs');
}

function update() {
}
