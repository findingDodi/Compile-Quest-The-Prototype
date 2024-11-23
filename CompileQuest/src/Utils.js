
export class Utils {

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

