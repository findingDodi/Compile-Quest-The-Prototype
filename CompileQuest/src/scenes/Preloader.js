import { Scene } from 'phaser';
import {Utils} from "../Utils.js";
import {Positions} from "../Positions.js";

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can display it here
        this.add.image(Positions.SCREEN_CENTER_X, Positions.SCREEN_CENTER_Y, 'background');

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(Positions.SCREEN_CENTER_X, Positions.SCREEN_CENTER_Y, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(Positions.SCREEN_CENTER_X - 230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        this.load.image('logo', 'logo.png');

        this.load.image('player', 'player/Player_walk_0.png');
        this.load.image('player1', 'player/Player_walk_1.png');
        this.load.image('player2', 'player/Player_walk_2.png');
        this.load.image('player3', 'player/Player_walk_3.png');
        this.load.image('player4', 'player/Player_walk_4.png');
        this.load.image('player5', 'player/Player_walk_5.png');
        this.load.image('player6', 'player/Player_walk_6.png');
        this.load.image('player7', 'player/Player_walk_7.png');
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }
}
