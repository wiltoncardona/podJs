export class MisionVisionPod {


  constructor() {
    this.section = document.createElement('section');
    this.section.className = 'misionvision'
    this.init();
  }

  init(){
     this.section.innerHTML = `

                <div class="title text-center">
                    <h1 class="blown-up">Our Vision</h1>
                     
                         <img src=" https://www.globant.com/sites/default/files/static-pages/node-104.jpg" alt="vision-mision">                        
                    
                </div>
              
                <div class="text-center">
                    <h3 class="excerpt">WE WANT TO CHALLENGE THE STATUS QUO AND BECOME THE BEST COMPANY IN THE CREATION OF DIGITAL JOURNEYS, COMBINING THE BEST OF ENGINEERING, INNOVATION AND DESIGN.</h3>
                    <p class="header-text">Our goal is to be the leader in the creation of digital journeys that matter to millions of users.</p>
                </div>
                <br/>
                <div>                    

                </div>
              
               
            
               
    `
    return this.section;
  }


}


