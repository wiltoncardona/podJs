import { Home } from './home.js';


describe('Home', () => {
    let home;

    beforeEach(()=> {
          home = new Home();
    });

    it('should create a new object Home   ', () => {
        expect(home).toBeDefined();
    });

    it('should Home has a name  home  ', () => {    
        expect(home.name).toEqual('home');
    });

    it('should Home has a model  home  ', () => {        
        expect(home.model).toBeDefined();
        expect(home.model['home']).toBeDefined();

    });

    it('should return the view    ', () => {
        let view = home.view();
        expect(view).not.toEqual(null);
        expect(view).not.toBeUndefined();
        
    });

    it('should the view  has a title  Welcome to My PodJs! ', () => {
        let view = home.view();;
        expect(view).toContain('Welcome to My PodJs!');
        
    });

   
});
