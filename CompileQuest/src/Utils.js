
export class Utils {
    static SCREEN_CENTER_X = 1920/2;
    static SCREEN_CENTER_Y = 1080/2;
    static SCREEN_END_X = 1920;
    static SCREEN_END_Y = 1080;

    static savePrevious(previous_scene){
        localStorage.setItem('previous_scene', previous_scene);
    };

    static loadPrevious(){
        return parseInt(localStorage.getItem('previous_scene'));
    };

    static saveCurrent(current_scene){
        localStorage.setItem('current_scene', current_scene);
    };

    static loadCurrent(){
        let current_scene = localStorage.getItem('current_scene');

        if (current_scene !== null) {
            return parseInt(current_scene);
        }

        return 1;
    };

}

