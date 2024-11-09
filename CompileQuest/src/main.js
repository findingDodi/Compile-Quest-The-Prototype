import { Boot } from './scenes/Boot';
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';
import {Chapter01_1} from "./scenes/Chapter01_1.js";
import {Chapter01_2} from "./scenes/Chapter01_2.js";
import {Chapter01_4} from "./scenes/Chapter01_4.js";
import {Chapter01_3} from "./scenes/Chapter01_3.js";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Chapter01_1,
        Chapter01_2,
        Chapter01_3,
        Chapter01_4,
        GameOver
    ]
};

export default new Phaser.Game(config);
