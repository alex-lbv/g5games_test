import Phaser from 'phaser';
import {GameScene} from "./game-scene";

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#000000',
  parent: 'dog-search',
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: 767,
    height: 1075,
    min: {
      width: 320,
      height: 320
    },
    max: {
      width: 1366,
      height: 1366,
    }
  },
  scene: [
    new GameScene()
  ],
  callbacks: {
    postBoot: function (game) {
      game.scene.dump();
    }
  },
};

new Phaser.Game(config);
