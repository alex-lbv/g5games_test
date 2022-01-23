export class StartScene extends Phaser.Scene {
  constructor() {
    super('Start');
  }

  create() {
    this.add.rectangle(400, 300, 800, 600, 0x000000, .5);
    this.add.text(250, 200, '5 Hidden Dogs', {font: '40px Arial', fill: '#fff'});
    this.add.text(250, 300, 'Can you spot them', {font: '40px Arial', fill: '#fff'});
    this.add.image(400, 500, 'btn');
    this.add.text(320, 475, 'Play Now', {font: '40px Arial', fill: '#faf1b8'});
  }
}

