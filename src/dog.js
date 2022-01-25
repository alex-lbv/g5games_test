export class Dog {
  constructor(context, x, y, scale = 1, direction = 1, cb) {
    this.scale = scale;
    this.cb = cb;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.context = context;
    this.dog = this.context.add.image(this.x, this.y, 'doggy');
    this.sprite = null;
    this.init();
    this.addClickHandler();
  }

  init() {
    this.dog.setScale(this.scale * this.direction, this.scale);
    this.dog.setInteractive();
    this.context.anims.create({
      key: 'selection',
      frames: this.context.anims.generateFrameNumbers('select'),
      frameRate: 60
    });
    this.sprite = this.context
      .add.sprite(this.x, this.y, 'select')
      .setAlpha(0).setScale(this.scale, this.scale);
  }

  addClickHandler() {
    this.dog.on('pointerdown', () => {
      this.sprite.setAlpha(1).play({key: 'selection', repeat: 0})
      this.dog.removeInteractive();
      if (this.cb) this.cb();
    }, this.context)
  }
}
