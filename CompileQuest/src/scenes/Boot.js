import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('background', 'assets/bg.png');
        this.load.image('background01', 'assets/Background_Chapter01_1.jpg');
        this.load.image('background02', 'assets/Background_Chapter01_2.jpg');
        this.load.image('background03', 'assets/Background_Chapter01_3.jpg');
        this.load.image('background04', 'assets/Background_Chapter01_4.jpg');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
