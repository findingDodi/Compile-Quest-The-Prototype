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
        Utils.saveCurrent(this.current);

        //Utils.loadCurrent();
        this.previous = Utils.loadPrevious();

        this.add.image(Utils.SCREEN_CENTER_X, Utils.SCREEN_CENTER_Y, 'background0' + this.current);

        if (this.current < this.previous) {
            this.player = new Player(this, Utils.SCREEN_END_X - 50, Utils.SCREEN_END_Y - 200, 'player');
        } else {
            this.player = new Player(this, 50, Utils.SCREEN_END_Y - 200, 'player');
        }

        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update(time, delta) {
        // Player movement entries
        if (this.cursors.left.isDown) {
            this.player.move("left", delta);
        }

        if (this.cursors.right.isDown) {
            this.player.move("right", delta);
        }

        //console.log(time, delta);
    }
}
