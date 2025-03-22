export class InventoryBox {

    positionX = 0;
    positionY = 0;
    boxItem = null;


    constructor(x, y, item = null) {
        this.positionX = x;
        this.positionY = y;
        this.boxItem = item;
    }

    addObjectToBox(item) {
        console.log(item);
        this.boxItem = item;
        this.boxItem.x = this.positionX;
        this.boxItem.y = this.positionY;
    }

    isFree() {
        return this.boxItem === null;
    }
}