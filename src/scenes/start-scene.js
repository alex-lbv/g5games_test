export class StartScene extends Phaser.Scene {
  constructor() {
    super('Start');
  }

  create() {
    this.add.rectangle(500, 300, window.innerWidth, window.innerHeight, 0x000000);
    this.add.text(250, 200, '5 Hidden Dogs', {font: '50px Arial', fill: '#ffffff'});
    this.add.text(250, 300, 'Can you spot them', {font: '50px Arial', fill: '#ffffff'});
    this.add.image(630, 200, 'doggy-reverse').setSize(20,30);
  }
}

