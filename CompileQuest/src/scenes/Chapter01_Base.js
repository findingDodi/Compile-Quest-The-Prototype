import { Scene } from 'phaser';
import {Utils} from "../Utils.js";
import {Player} from "../gameobjects/Player.js";
import {Positions} from "../Positions.js";
import {Inventory} from "../gameobjects/Inventory.js";

export class Chapter01_Base extends Scene
{
    scene = null;
    player = null;
    inventory = null;
    cursors = null;
    previous = null;
    current = null;
    has_prev = false;
    has_next = false;

    create()
    {
        this.cameras.main.setBackgroundColor(0xff00ff);
        Utils.saveCurrent(this.current);

        //Utils.loadCurrent();
        this.previous = Utils.loadPrevious();

        this.add.image(Positions.SCREEN_CENTER_X, Positions.SCREEN_CENTER_Y, 'background0' + this.current);

        this.inventory = new Inventory(this, Positions.SCREEN_CENTER_X, Positions.SCREEN_CENTER_Y, 'inventory')

        if (this.current < this.previous) {
            this.player = new Player(this, Positions.PLAYER_END_X, Positions.PLAYER_END_Y, 'player');
        } else {
            this.player = new Player(this, Positions.PLAYER_START_X, Positions.PLAYER_END_Y, 'player');
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

        if (this.player.x < 0) {
            Utils.savePrevious(this.current);

            if (this.has_prev) {
                let following_scene = Utils.loadCurrent() - 1;
                this.scene.start('Chapter01_' + following_scene);
            }
        }

        if (this.player.x > Positions.SCREEN_END_X) {
            Utils.savePrevious(this.current);

            if (this.has_next) {
                let following_scene = Utils.loadCurrent() + 1;
                this.scene.start('Chapter01_' + following_scene);
            }
        }

        //console.log(time, delta);
    }
}
