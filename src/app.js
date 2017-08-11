import { AppRouter } from './appRouter';

class App {
  constructor() {
    this.router =  new AppRouter();
  };
  init() {
    console.log('Application loaded at ' + Date.now());
    //register router
    this.router.route(event);
    window.addEventListener("hashchange",(event)=>{
          this.router.route(event);
    });
   
  }
}
const app = new App();
window.addEventListener('load', () => app.init());

