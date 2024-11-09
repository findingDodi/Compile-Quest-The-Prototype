import { Scene } from 'phaser';
import {Utils} from "../Utils.js";
import {Player} from "../gameobjects/Player.js";

export class Chapter01_4 extends Scene
{
    player = null;
    cursors = null;

    constructor ()
    {
        super('Chapter01_4');
    }

    create()
    {
        this.cameras.main.setBackgroundColor(0x002200);

        this.player = new Player(this, Utils.SCREEN_CENTER_X + 200, Utils.SCREEN_CENTER_Y, 'player');
        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {
        if (this.player.x < 0) {
            this.scene.start('Chapter01_3');
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
