import { misionVision } from './misionVisionView';

export class MisionVision{
    

    constructor(){
        this.name ='misionVision';
        this.model =  {
            home : []
        }
    }    

    view(){    
        return `${misionVision()}`;
    };

    controller(){
    }


   


}