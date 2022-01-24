export class EndScene extends Phaser.Scene {
  constructor() {
    super('End');
  }

  create() {
    this.add.rectangle(500, 300, window.innerWidth, window.innerHeight, 0x000000);
    this.add.image(510, 100, 'logo').setScale(.7);
    this.add.image(170, 310, 'char').setScale(.7);
    this.add.text(340, 200, 'Great Job', {font: '600 70px Arial', fill: '#faf1b8'});
    this.add.text(350, 300, 'Can you solve', {font: '600 50px Arial', fill: '#ffffff'});
    this.add.text(340, 360, 'every mystery?', {font: '600 50px Arial', fill: '#ffffff'});
  }
}

