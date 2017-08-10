import { View } from './views/view';

class App {
  constructor() {
    this.el = document.getElementById('target');
  };
  init() {
    console.log('runnig!');
    for (var index = 0; index < 5; index++) {
       let view = new View();
       view.render(this.el);
      
    }
    
  };
}


const app = new App();
window.addEventListener('load', () => app.init());