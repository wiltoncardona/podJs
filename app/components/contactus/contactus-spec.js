import { ContactUs } from './ContactUs.js';


describe('ContactUs', () => {
    let contactUs;

    beforeEach(()=> {
          contactUs = new ContactUs();
    });

    it('should create a new object Contact   ', () => {
        expect(contactUs).toBeDefined();
    });

    it('should ContactUs has a name  contactus  ', () => {    
        expect(contactUs.name).toEqual('contactus');
    });

    it('should ContactUs has a model  contact  ', () => {
        
        expect(contactUs.model).toBeDefined();
        expect(contactUs.model['contact']).toBeDefined();

    });

    it('should return the view    ', () => {
        let view = contactUs.view();
        expect(view).not.toEqual(null);
        expect(view).not.toBeUndefined();
        
    });

    it('should the view  has a title  Get in Touch ', () => {
        let view = contactUs.view();;
        expect(view).toContain('Get in Touch');
        
    });

    it('should the view has a form ', () => {
        let view = contactUs.view();;
        expect(view).toContain('form');
        
    }); 
});
