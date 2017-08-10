import { View } from '../views/view';
import { render,removeChild } from '../util/utils'
import { StorageService  } from '../util/serviceLocalStorage';

export const PodTeamController = (data,params)=>{

    let storage = new StorageService();
    let team = storage.getTeamMembers();
  
    removeChild();
    team.forEach((element)=>{
        let view = new View(element);
        render(view.init());        
    });
    
    

    
}

