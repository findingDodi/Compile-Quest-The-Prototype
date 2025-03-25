import {Chapter01_Base} from "./Chapter01_Base.js";
import {ClickableObject} from "../gameobjects/ClickableObject.js";
import {Positions} from "../Positions.js";

export class Chapter01_3 extends Chapter01_Base
{
    current = 3;
    has_prev = true;
    has_next = true;
    clickableObject = null;

    constructor ()
    {
        super('Chapter01_3');
    }

    create()
    {
        super.create();
        this.clickableObject = new ClickableObject(this, Positions.SCREEN_CENTER_X, Positions.SCREEN_BOTTOM_Y, 'code');

    }

    update(time, delta) {
        super.update(time, delta);


    }
}
