import Phaser from 'phaser';
import FadeOutDestroy from 'phaser3-rex-plugins/plugins/fade-out-destroy.js';
import {StartScene} from "./scenes/start-scene";
import {GameScene} from "./scenes/game-scene";
import {BootScene} from "./scenes/boot-scene";
import {EndScene} from "./scenes/end-scene";
import {ButtonScene} from "./scenes/button-scene";

const config = {
  type: Phaser.AUTO,
  parent: 'dog-search',
  autoCenter: Phaser.Scale.CENTER_BOTH,
  width: 1000,
  height: 600,
  scene: [
    new BootScene(),
    new GameScene(),
    new StartScene(),
    new EndScene(),
    new ButtonScene(),
  ],
  callbacks: {
    postBoot: function (game) {
      game.scene.dump();
    }
  },
  global: [{
    key: 'rexFade',
    plugin: FadeOutDestroy,
    start: true
  }],
};

const game = new Phaser.Game(config);
