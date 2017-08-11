
import { View } from './view';

export class TeamPod {


  constructor() {
    this.div = document.createElement('div');
   
    this.init();
  }

  init(){
     this.div.innerHTML = `
                <div class="title text-center">
                  <h2 class="section-heading">Our Amazing Team</h2>
                  <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>  
    `
    return this.div;
  }


  addTeamMembers(team){
      let div = document.createElement('div');
      div.className = 'team-members';
      team.forEach((member)=>{
          let view = new View(member);
          div.appendChild(view.init())
        
      });
      this.div.append(div);
  }

  getTeam(){
      return this.div;
  }



}


