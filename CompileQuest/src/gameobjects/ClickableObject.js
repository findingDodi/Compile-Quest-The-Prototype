export class ClickableObject extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);

        this.setInteractive();
        scene.input.on('gameobjectdown', this.onObjectClicked);
    }

    onObjectClicked() {
        const inventory = this.scene.inventory;
        inventory.addToInventory(this);
    }

}