
import { teamView } from '../teamView'
import { TeamService } from '../../../services/teamService'


export class Person{
    

    constructor(){        
        this.service = new TeamService();

        this.name ='teamperson';
        this.model =  {
            person : []
        }
    }    

    view(){       
        const fullPerson  = this.model.person.reduce((prev,person)=>prev+teamView(person),'');
        return `${fullPerson}`;
    };

    controller(params){
         console.log(`Paramms to fin ${params}`);
         this.service.getPerson(params[1])
            .then(result => {
                console.log(result);
                this.model.person = result || [];              
            })
            .catch(error => console.log(error) );   
    }
}
