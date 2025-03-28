import {Chapter01_Base} from "./Chapter01_Base.js";
import {Positions} from "../Positions.js";
import {ClickableObject} from "../gameobjects/ClickableObject.js";

export class Chapter01_1 extends Chapter01_Base
{
    current = 1;
    has_next = true;
    clickableObject = null;

    constructor ()
    {
        super('Chapter01_1');
    }

    create()
    {
        super.create();

        this.clickableObject = new ClickableObject(this, Positions.SCREEN_END_X - 100, Positions.SCREEN_BOTTOM_Y, 'code');
        //this.dragableObject = new DraggableObject(this, Positions.SCREEN_CENTER_X, Positions.SCREEN_BOTTOM_Y, 'clicki');


    }

    update(time, delta) {
        super.update(time, delta);
    }

}
