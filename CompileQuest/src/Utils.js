
export class Utils {
    static SCREEN_CENTER_X = 1920/2;
    static SCREEN_CENTER_Y = 1080/2;
    static SCREEN_END_X = 1920;

    static savePrevious(previous_scene){
        localStorage.setItem('previous_scene', previous_scene);
    };

    static loadPrevious(){
        console.log(parseInt(localStorage.getItem('previous_scene')));
        console.log(localStorage.getItem('previous_scene'));
        return parseInt(localStorage.getItem('previous_scene'));
    };

}

