import { Scene } from 'phaser';
import {Utils} from "../Utils.js";
import {Player} from "../gameobjects/Player.js";

export class Chapter01_2 extends Scene
{
    player = null;
    cursors = null;

    constructor ()
    {
        super('Chapter01_2');
    }

    create()
    {
        this.cameras.main.setBackgroundColor(0x00ff00);

        this.player = new Player(this, Utils.SCREEN_CENTER_X + 200, Utils.SCREEN_CENTER_Y, 'player');
        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {
        if (this.player.x > Utils.SCREEN_END_X) {
            this.scene.start('Chapter01_3');
        }

        if (this.player.x < 0) {
            this.scene.start('Chapter01_1');
        }

        // Player movement entries
        if (this.cursors.left.isDown) {
            this.player.move("left");
        }
        if (this.cursors.right.isDown) {
            this.player.move("right");
        }
    }
}
