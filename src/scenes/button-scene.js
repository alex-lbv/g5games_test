export class ButtonScene extends Phaser.Scene {
  constructor() {
    super('Button');

    this.btn = null;
  }

  create() {
    this.btn = this.add.image(510, 530, 'btn');
    this.add.text(405, 500, 'Play Now', {font: '50px Arial', fill: '#faf1b8'});

    this.btn.setInteractive();

    this.btn.on('pointerdown', () => {
      console.log('click');
    })
  }
}
