import { Scene } from 'phaser';
import {Utils} from "../Utils.js";
import {Player} from "../gameobjects/Player.js";
import {Positions} from "../Positions.js";
import {Inventory} from "../gameobjects/Inventory.js";
import {InventoryImage} from "../gameobjects/InventoryImage.js";

export class Chapter01_Base extends Scene {
    scene = null;
    player = null;
    inventory = null;
    cursors = null;
    previous = null;
    current = null;
    has_prev = false;
    has_next = false;

    create() {
        this.cameras.main.setBackgroundColor(0xff00ff);
        Utils.saveCurrent(this.current);
        this.previous = Utils.loadPrevious();

        this.add.image(Positions.SCREEN_CENTER_X, Positions.SCREEN_CENTER_Y, 'background0' + this.current);

        this.inventory = new InventoryImage(this, Positions.SCREEN_CENTER_X, Positions.SCREEN_CENTER_Y, 'inventory');

        this.add.text(Positions.SCENE_TEXT_X, Positions.SCENE_TEXT_Y, this.current, {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        if (this.current < this.previous) {
            this.player = new Player(this, Positions.PLAYER_END_X, Positions.PLAYER_END_Y, 'player');
        } else {
            this.player = new Player(this, Positions.PLAYER_START_X, Positions.PLAYER_END_Y, 'player');
        }

        this.cursors = this.input.keyboard.createCursorKeys();
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }

    update(time, delta) {
        // Player movement entries
        if (this.cursors.left.isDown || this.keyA.isDown) {
            this.player.move("left", delta);
        }

        if (this.cursors.right.isDown || this.keyD.isDown) {
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
    }
}
