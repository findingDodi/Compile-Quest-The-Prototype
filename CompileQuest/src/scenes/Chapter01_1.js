import {Chapter01_Base} from "./Chapter01_Base.js";
import {Positions} from "../Positions.js";
import {DraggableObject} from "../gameobjects/DraggableObject.js";
import {ClickableObject} from "../gameobjects/ClickableObject.js";

export class Chapter01_1 extends Chapter01_Base
{
    current = 1;
    has_next = true;
    clickableObject = null;
    dragableObject = null;

    constructor ()
    {
        super('Chapter01_1');
    }

    create()
    {
        super.create();
        //this.cameras.main.setBackgroundColor(0x00bb00);

        this.clickableObject = new ClickableObject(this, Positions.SCREEN_CENTER_X, Positions.SCREEN_BOTTOM_Y, 'clicki');
        this.clickableObject = new ClickableObject(this, 500, 500, 'clicki');
        //this.dragableObject = new DraggableObject(this, Positions.SCREEN_CENTER_X, Positions.SCREEN_BOTTOM_Y, 'clicki');


    }

    update(time, delta) {
        super.update(time, delta);

    }

}
