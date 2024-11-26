import { Scene } from 'phaser';
import {Utils} from "../Utils.js";
import {Player} from "../gameobjects/Player.js";
import {Chapter01_Base} from "./Chapter01_Base.js";
import {Positions} from "../Positions.js";

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
