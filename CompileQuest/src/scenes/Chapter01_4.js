import {Chapter01_Base} from "./Chapter01_Base.js";
import {ClickableObject} from "../gameobjects/ClickableObject.js";
import {Positions} from "../Positions.js";
import {NPC} from "../gameobjects/NPC.js";

export class Chapter01_4 extends Chapter01_Base
{
    current = 4;
    has_prev = true;
    clickableObject = null;
    npc = null;

    constructor ()
    {
        super('Chapter01_4');
    }

    create()
    {
        super.create();
        this.clickableObject = new ClickableObject(this, Positions.SCREEN_START_X, Positions.SCREEN_BOTTOM_Y, 'code');
        this.npc = new NPC(this, Positions.PLAYER_END_X -100, Positions.PLAYER_END_Y +100, 'monster');
        this.npc.flipX = true;
        /*
        this.scene.tweens.add({
            targets: this.npc,
            x: 1,
            ease: 'Bounce',
            duration: 1000,
            repeat: -1,
            yoyo: false,
        });
        */

    }

    update(time, delta) {
        super.update(time, delta);

    }
}
