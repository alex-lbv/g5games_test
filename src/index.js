import Phaser from 'phaser';
import FadeOutDestroy from 'phaser3-rex-plugins/plugins/fade-out-destroy.js';
import ScalePlugin from "phaser3-rex-plugins/plugins/easemove-plugin";
import {StartScene} from "./scenes/start-scene";
import {GameScene} from "./scenes/game-scene";
import {BootScene} from "./scenes/boot-scene";
import {EndScene} from "./scenes/end-scene";

const config = {
  type: Phaser.AUTO,
  parent: 'dog-search',
  width: 800,
  height: 600,
  scene: [
    new BootScene(),
    new GameScene(),
    new StartScene(),
    new EndScene(),
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
  },
    {
      key: 'rexScale',
      plugin: ScalePlugin,
      start: true
    },],
};

const game = new Phaser.Game(config);
