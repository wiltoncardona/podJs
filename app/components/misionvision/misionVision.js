import { misionVision } from './misionVisionView';

export class MisionVision{
    

    constructor(){
        this.name ='misionVision';
        this.model =  {
            mision : []
        }
    }    

    view(){    
        return `${misionVision()}`;
    };

    controller(){
    }


   


}