import { Scene } from 'phaser';
import {Utils} from "../Utils.js";
import {Player} from "../gameobjects/Player.js";

export class Chapter01_Base extends Scene
{
    scene = null;
    player = null;
    cursors = null;
    previous = null;
    current = null;

    create()
    {
        this.cameras.main.setBackgroundColor(0xff00ff);

        this.previous = Utils.loadPrevious();

        if (this.current < this.previous) {
            this.player = new Player(this, Utils.SCREEN_END_X - 50, Utils.SCREEN_CENTER_Y, 'player');
        } else {
            this.player = new Player(this, 50, Utils.SCREEN_CENTER_Y, 'player');
        }

        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {
        // Player movement entries
        if (this.cursors.left.isDown) {
            this.player.move("left");
        }
        if (this.cursors.right.isDown) {
            this.player.move("right");
        }
    }
}
