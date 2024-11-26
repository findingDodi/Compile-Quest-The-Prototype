import {Utils} from "../Utils.js";

export class Player extends Phaser.GameObjects.Sprite {

    delta_counter = 0;
    available_textures = [
        'player',
        'player1',
        'player2',
        'player3',
        'player4',
        'player5',
        'player6',
        'player7',
    ];
    current_texture_index = 0;

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);
    }


    move(direction, delta) {
        this.walk(delta);

        if (direction === "left" && this.x > -80) {
            this.flipX = true;
            this.x -= 5;

        } else if (direction === "right" && this.x < 2000) {
            this.flipX = false;
            this.x += 5;
        }
    }

    walk(delta) {
        this.delta_counter += delta;

        if (this.delta_counter >= 200) {

            this.current_texture_index++;

            if (this.current_texture_index === this.available_textures.length) {
                this.current_texture_index = 0;
            }

            this.setTexture(this.available_textures[this.current_texture_index]);

            this.delta_counter = 0;
        }
    }

    update(args) {

    }
}