import { makeDraggable } from '../libs/draggable.js';

export class DraggableObject extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);
        makeDraggable(this);

    }
}