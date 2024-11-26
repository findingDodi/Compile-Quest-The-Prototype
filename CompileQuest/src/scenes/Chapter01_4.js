import { Scene } from 'phaser';
import {Utils} from "../Utils.js";
import {Player} from "../gameobjects/Player.js";
import {Chapter01_Base} from "./Chapter01_Base.js";

export class Chapter01_4 extends Chapter01_Base
{
    current = 4;
    has_prev = true;

    constructor ()
    {
        super('Chapter01_4');
    }

    create()
    {
        super.create();
        this.cameras.main.setBackgroundColor(0x002200);
    }

    update(time, delta) {
        super.update(time, delta);
    }
}
