
import { teamView } from './teamView';
import { TeamService } from '../../services/teamService'

export class Team{
    

    constructor(){ 
        this.service = new TeamService();

        this.name ='team';
        this.model =  {
            team : []
        }
    }    

    view(){    

        const teamHtml  = this.model.team.reduce((prev,person)=>prev+teamView(person),'');
        return `<div class="team-members">${teamHtml}</div>`;
    };

    controller(){
        this.service.getTeam()
            .then(result => {
                this.model.team = result.team || [];               
            })
            .catch(error => console.log(error) );            
    }


   


}