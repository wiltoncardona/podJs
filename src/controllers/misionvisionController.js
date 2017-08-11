import { MisionVisionPod } from '../views/misionVision';
import { render,removeChild } from '../util/utils'

export const MisionVisionController = (data,params)=>{
    let misionVisionPod =  new MisionVisionPod();
    removeChild();
    render(misionVisionPod.init());
}

