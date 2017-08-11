import { View } from '../views/view';
import { TeamPod } from '../views/teamPods';


import { render,removeChild} from '../util/utils'
import { StorageService  } from '../util/serviceLocalStorage';

export const PodTeamController = (data,params)=>{

    let storage = new StorageService();
    let teamPod = new TeamPod();
    removeChild();

    if(params && params['id']){        
         let member = storage.findMember(params['id'])[0];
         if(!member){
             render(teamPod.error()); 
             return;
         }         
         render(teamPod.fullPerson(member)); 

    }else {    
        let team = storage.getTeamMembers();       
        teamPod.addTeamMembers(team);
        render(teamPod.getTeam());
        /*renderAppend(teamPod.getTeam());

        team.forEach((element)=>{
            let view = new View(element);
            render(view.init()) ;   
        }); */
    }

    
    
    
    

    
}

