import { View } from './views/view';

class App {
  constructor() {
    this.view = new View();
  };
  init() {
    console.log('runnig!');
    this.view.render();
  };
}

const app = new App();

window.addEventListener('load', () => app.init());