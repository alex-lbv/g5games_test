import Phaser from 'phaser';
import {GameScene} from "./game-scene";

const config = {
  type: Phaser.AUTO,
  parent: 'dog-search',
  autoCenter: Phaser.Scale.CENTER_BOTH,
  width: 1000,
  height: 600,
  scene: [
    new GameScene()
  ],
  callbacks: {
    postBoot: function (game) {
      game.scene.dump();
    }
  },
};

const game = new Phaser.Game(config);
