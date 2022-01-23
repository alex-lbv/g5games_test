import Phaser from 'phaser';
import {StartScene} from "./scenes/start-scene";
import {GameScene} from "./scenes/game-scene";
import {BootScene} from "./scenes/boot-scene";

const config = {
  type: Phaser.AUTO,
  parent: 'dog-search',
  width: 800,
  height: 600,
  scene: [
    new BootScene(),
    new GameScene(),
    new StartScene(),

  ],
  callbacks: {
    postBoot: function (game) {
      game.scene.dump();
    }
  }
};

new Phaser.Game(config);

