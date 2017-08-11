
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


  fullPerson(member){
    console.log(member.photoUrl);
    let div = document.createElement('div');
    div.className = 'team-full';
    div.innerHTML = ` 
          <div> 
            <img class="img-circle" src="${member.photoUrl}" alt="Generic placeholder image" width="140" height="140">
          </div>
          <div>
            <h2>${member.firstName} ${member.lastName} </h2>
            <br/>
            <p><strong>Email:</strong>  ${member.email}</p> 
            <br/>
            <h4>Role</h4>
            <br/>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <br/>
            <h4>Goals</h4>
            <br/>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          </div>
    `

    return div;
  }

  error(){
    let div = document.createElement('div');
    div.innerHTML = `         
          
          <h4> The user doesn´t Exist!!!!!</h4>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          
        
    `

    return div;
  }

  getTeam(){
      return this.div;
  }



}


