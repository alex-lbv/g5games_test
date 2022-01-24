export class EndScene extends Phaser.Scene {
  constructor() {
    super('End');
  }

  create() {
    this.add.rectangle(400, 300, 800, 600, 0x000000);
    this.add.text(250, 200, 'End', {font: '40px Arial', fill: '#faf1b8'});
    this.add.text(250, 300, 'Game', {font: '40px Arial', fill: '#faf1b8'});
  }
}

