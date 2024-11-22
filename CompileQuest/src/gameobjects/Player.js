import {Utils} from "../Utils.js";

export class Player extends Phaser.GameObjects.Sprite {

    scene = null;

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        this.scene = scene;
        this.scene.add.existing(this);
    }


    move(direction) {
        if (direction === "left" && this.x > -80) {
            this.flipX = true;
            this.x -= 5;
        } else if (direction === "right" && this.x < 2000) {
            this.flipX = false;
            this.x += 5;
        }
    }

    update() {
        // wiggle
        //this.x += Math.sin(this.scene.time.now / 200) * 0.10;

    }

}