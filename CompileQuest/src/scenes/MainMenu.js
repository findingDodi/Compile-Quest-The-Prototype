import { Scene } from 'phaser';
import { Utils } from '../Utils.js';
import {Positions} from "../Positions.js";

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(Positions.SCREEN_CENTER_X, Positions.SCREEN_CENTER_Y, 'background').setScale(2);

        this.add.image(Positions.SCREEN_CENTER_X, 300, 'logo');

        this.add.text(Positions.SCREEN_CENTER_X, Positions.SCREEN_CENTER_Y, 'Click to start Game', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            let lastCurrentScene = Utils.loadCurrent();
            this.scene.start('Chapter01_' + lastCurrentScene.toString());
        });
    }
}
