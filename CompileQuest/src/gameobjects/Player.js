import {GameObjects, Physics} from "phaser";
import {Utils} from "../Utils.js";

export class Player extends Physics.Arcade.Image {

    scene = null;
    fakeImage = null;

    constructor(scene, x, y) {
        super(scene, x, y, 'player');

        this.scene = scene;
        this.scene.add.existing(this);
    }


    move(direction) {
        if (direction === "left" && this.x - 10 > 0) {
            this.x -= 5;
        } else if (direction === "right" && this.x + 10 < 1920) {
            this.x += 5;
        }
    }

    update() {
        // wiggle
        //this.x += Math.sin(this.scene.time.now / 200) * 0.10;
        console.log(this.x, this.y)
    }

}