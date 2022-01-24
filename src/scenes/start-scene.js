export class StartScene extends Phaser.Scene {
  constructor() {
    super('Start');
  }

  create() {
    this.add.rectangle(400, 300, 800, 600, 0x000000);
    this.add.text(250, 200, '5 Hidden Dogs', {font: '40px Arial', fill: '#faf1b8'});
    this.add.text(250, 300, 'Can you spot them', {font: '40px Arial', fill: '#faf1b8'});
    this.add.image(580, 200, 'doggy-reverse').setSize(20,30);
  }
}

