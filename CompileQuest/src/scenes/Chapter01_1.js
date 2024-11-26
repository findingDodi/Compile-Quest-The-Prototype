import {Utils} from "../Utils.js";
import {Chapter01_Base} from "./Chapter01_Base.js";
import {Positions} from "../Positions.js";

export class Chapter01_1 extends Chapter01_Base
{
    current = 1;
    has_next = true;

    constructor ()
    {
        super('Chapter01_1');
    }

    create()
    {
        super.create();
        //this.cameras.main.setBackgroundColor(0x00bb00);

    }


    update(time, delta) {
        super.update(time, delta);

    }

}
