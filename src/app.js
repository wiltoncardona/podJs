import { View } from './views/view';
import { StorageService  } from './util/serviceLocalStorage'

class App {
  constructor() {
    this.el = document.getElementById('target');
    this.storage = new StorageService();
  };
  init() {
    console.log('runnig!');
    this.loadData();
  }

  loadData(){
   let data = this.storage.getItems();
   data.team.forEach((element)=>{
      let view = new View(element);
       view.render(this.el);
   });
    
  }
}


const app = new App();
window.addEventListener('load', () => app.init());