import {Chapter01_Base} from "./Chapter01_Base.js";

export class Chapter01_3 extends Chapter01_Base
{
    current = 3;
    has_prev = true;
    has_next = true;

    constructor ()
    {
        super('Chapter01_3');
    }

    create()
    {
        super.create();
        this.cameras.main.setBackgroundColor(0x000000);

    }

    update(time, delta) {
        super.update(time, delta);


    }
}
