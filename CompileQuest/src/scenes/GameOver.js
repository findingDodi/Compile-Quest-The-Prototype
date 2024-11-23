import { Scene } from 'phaser';
import {Utils} from "../Utils.js";
import {Positions} from "../Positions.js";

export class GameOver extends Scene
{
    constructor ()
    {
        super('GameOver');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0xff0000);

        this.add.image(Positions.SCREEN_CENTER_X, Positions.SCREEN_CENTER_Y, 'background')
            .setAlpha(0.5)
            .setScale(2);

        this.add.text(Positions.SCREEN_CENTER_X, Positions.SCREEN_CENTER_Y, 'Game Over', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('MainMenu');

        });
    }
}
