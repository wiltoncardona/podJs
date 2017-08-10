import { View } from './views/view';
import { StorageService  } from './util/serviceLocalStorage'

import { AppRouter } from './appRouter';


class App {
  constructor() {
    this.el = document.getElementById('target');
    this.storage = new StorageService();
    this.router =  new AppRouter();
  };
  init() {
    console.log('runnig!');
    //this.loadData();
    //register router
    window.addEventListener("hashchange",(event)=>{
          this.router.route(event);
    });
   
  }

  loadData(){
   let team = this.storage.getTeamMembers();
   team.forEach((element)=>{
      let view = new View(element);
       view.render(this.el);
   });
    
  }

}


const app = new App();
window.addEventListener('load', () => app.init());

