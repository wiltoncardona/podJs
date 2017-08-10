import { AppRouter } from './appRouter';


class App {
  constructor() {
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
}


const app = new App();
window.addEventListener('load', () => app.init());

