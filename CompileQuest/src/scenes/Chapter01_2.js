import { Scene } from 'phaser';
import {Utils} from "../Utils.js";
import {Player} from "../gameobjects/Player.js";
import {Chapter01_Base} from "./Chapter01_Base.js";

export class Chapter01_2 extends Chapter01_Base
{
    current = 2;

    constructor ()
    {
        super('Chapter01_2');
    }

    create()
    {
        super.create();
        this.cameras.main.setBackgroundColor(0x00ff00);
    }

    update(time, delta) {
        super.update(time, delta);

        if (this.player.x > Utils.SCREEN_END_X) {
            Utils.savePrevious(2);
            this.scene.start('Chapter01_3');
        }

        if (this.player.x < 0) {
            Utils.savePrevious(2);
            this.scene.start('Chapter01_1');
        }
    }
}
