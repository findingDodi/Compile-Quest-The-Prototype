export class ClickableObject extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);

        this.setInteractive();
        scene.input.on('gameobjectdown', this.onObjectClicked);
    }

    onObjectClicked(pointer, gameObject) {
        gameObject.x -= 200;
    }

}