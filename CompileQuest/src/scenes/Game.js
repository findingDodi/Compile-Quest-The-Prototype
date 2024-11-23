import { Scene } from 'phaser';
import {Utils} from "../Utils.js";
import {Player} from "../gameobjects/Player.js";
import {Positions} from "../Positions.js";

export class Game extends Scene
{
    player = null;
    cursors = null;
    counter = 0;

    constructor ()
    {
        super('Game');
        this.counter++;
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x00ff00);
        /*
        this.add.image(Utils.SCREEN_CENTER_X, Utils.SCREEN_CENTER_Y, 'background')
            .setAlpha(0.5)
            .setScale(2);

         */
        this.player = new Player(this, Positions.PLAYER_START_X, Positions.PLAYER_END_Y, 'player');
        this.cursors = this.input.keyboard.createCursorKeys();

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }

    update(time, delta) {
        this.player.update();

        // Player movement entries
        if (this.cursors.left.isDown) {
            this.player.move("left");
        }
        if (this.cursors.right.isDown) {
            this.player.move("right");
        }

        console.log(this.counter);

    }
}
