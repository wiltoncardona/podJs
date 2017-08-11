import { View } from '../views/view';
import { TeamPod } from '../views/teamPods';


import { render,removeChild} from '../util/utils'
import { StorageService  } from '../util/serviceLocalStorage';

export const PodTeamController = (data,params)=>{

    let storage = new StorageService();
    let team = storage.getTeamMembers();
    let teamPod = new TeamPod();

    removeChild();
    teamPod.addTeamMembers(team);
    render(teamPod.getTeam());
    /*renderAppend(teamPod.getTeam());

    team.forEach((element)=>{
        let view = new View(element);
        render(view.init()) ;   
    }); */
    
    
    

    
}

