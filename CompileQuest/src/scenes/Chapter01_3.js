import { Scene } from 'phaser';
import {Utils} from "../Utils.js";
import {Player} from "../gameobjects/Player.js";

export class Chapter01_3 extends Scene
{
    player = null;
    cursors = null;

    constructor ()
    {
        super('Chapter01_3');
    }

    create()
    {
        this.cameras.main.setBackgroundColor(0x000000);

        this.player = new Player(this, 50, Utils.SCREEN_CENTER_Y, 'player');
        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {
        if (this.player.x > Utils.SCREEN_END_X) {
            this.scene.start('Chapter01_4');
        }

        if (this.player.x < 0) {
            this.scene.start('Chapter01_2');
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
