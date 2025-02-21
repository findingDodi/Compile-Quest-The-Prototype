import {Chapter01_Base} from "./Chapter01_Base.js";

export class Chapter01_2 extends Chapter01_Base
{
    current = 2;
    has_prev = true;
    has_next = true;

    constructor ()
    {
        super('Chapter01_2');
    }

    create()
    {
        super.create();
    }

    update(time, delta) {
        super.update(time, delta);

    }
}
