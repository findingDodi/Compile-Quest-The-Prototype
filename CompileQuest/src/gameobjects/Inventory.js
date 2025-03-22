import { InventoryBox } from "./InventoryBox.js";

export class Inventory extends Phaser.GameObjects.Image {
    boxPositions = [
        [168, 158],
        [363, 158],
        [558, 158],
        [753, 158],
        [948, 158],
        [1143, 158],
        [1338, 158],
        [1533, 158],
        [1728, 158]
    ];

    /** @type InventoryBox[] **/
    inventoryBoxes = [];

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);

        for (let i = 0; i < this.boxPositions.length; i++) {
            let box = new InventoryBox(this.boxPositions[i][0], this.boxPositions[i][1]);
            this.inventoryBoxes.push(box);
        }
    }

    addToInventory(item) {
        /** @type InventoryBox */
        let box = this.#getNextFreeInventoryBox();
        box.addObjectToBox(item);
    }

    #getNextFreeInventoryBox() {
        for (let i = 0; i < this.inventoryBoxes.length; i++) {
            if (this.inventoryBoxes[i].isFree()) {
                return this.inventoryBoxes[i];
            }
        }
    }

}