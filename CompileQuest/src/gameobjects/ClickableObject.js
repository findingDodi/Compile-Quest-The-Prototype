export class ClickableObject extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);

        this.setInteractive();
        scene.input.on('gameobjectdown', this.onObjectClicked);
    }

    onObjectClicked() {
        let inventory = this.scene.registry.get('inventory');
        inventory.addToInventory(this);

    }

}