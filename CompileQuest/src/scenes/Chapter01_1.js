import {Utils} from "../Utils.js";
import {Chapter01_Base} from "./Chapter01_Base.js";

export class Chapter01_1 extends Chapter01_Base
{
    current = 1;

    constructor ()
    {
        super('Chapter01_1');
    }

    create()
    {
        super.create();
        this.cameras.main.setBackgroundColor(0x00bb00);

    }


    update() {
        super.update();
        if (this.player.x > Utils.SCREEN_END_X) {
            Utils.savePrevious(1);
            this.scene.start('Chapter01_2');
        }

    }

}
