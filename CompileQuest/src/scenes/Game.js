import { Scene } from 'phaser';
import {Utils} from "../Utils.js";
import {Player} from "../gameobjects/Player.js";

export class Game extends Scene
{
    player = null;
    cursors = null;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x00ff00);
        /*
        this.add.image(Utils.SCREEN_CENTER_X, Utils.SCREEN_CENTER_Y, 'background')
            .setAlpha(0.5)
            .setScale(2);

         */
        this.player = new Player(this, Utils.SCREEN_CENTER_X + 200, Utils.SCREEN_CENTER_Y);
        this.cursors = this.input.keyboard.createCursorKeys();

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }

    update() {
        this.player.update();

        // Player movement entries
        if (this.cursors.left.isDown) {
            this.player.move("left");
        }
        if (this.cursors.right.isDown) {
            this.player.move("right");
        }

    }
}
