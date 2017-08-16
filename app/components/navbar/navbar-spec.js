import { NavBar } from './navBar.js';


describe('NavBar', () => {
    let navBar;

    beforeEach(()=> {
          navBar = new NavBar();
    });

    it('should create a new object NavBar   ', () => {
        expect(navBar).toBeDefined();
    });

    it('should NavBar has a name  main-navbar  ', () => {    
        expect(navBar.name).toEqual('main-navbar');
    });

    it('should return the view    ', () => {
        let view = navBar.view();
        expect(view).not.toEqual(null);
        expect(view).not.toBeUndefined();
        
    });

    it('should the view  has a element to Home ', () => {
        let view = navBar.view();;
        expect(view).toContain('<a href="#/home">Home</a>');        
    });

    it('should the view  has a element to Pod Team ', () => {
        let view = navBar.view();;
        expect(view).toContain('<a href="#/team">Pod Team</a>');        
    });

    it('should the view  has a element to Mision/vision ', () => {
        let view = navBar.view();;
        expect(view).toContain('<a href="#/mision">Mision/vision</a>');        
    });

    it('should the view  has a element to Goals ', () => {
        let view = navBar.view();;
        expect(view).toContain('<a href="#/goals">Goals</a>');        
    });

    it('should the view  has a element to Contact Us ', () => {
        let view = navBar.view();;
        expect(view).toContain('<a href="#/contactus">Contact Us</a>');        
    });

   
});
