import { Footer } from './footer.js';


describe('Footer', () => {
    let footer;

    beforeEach(()=> {
          footer = new Footer();
    });

    it('should create a new object footer ', () => {
        expect(footer).toBeDefined();
    });

    it('should Footer has a name  mainFooter  ', () => {    
        expect(footer.name).toEqual('mainFooter');
    });

    it('should ContactUs has not a model', () => {
        
        expect(footer['model']).not.toBeDefined();

    });

    it('should return the view    ', () => {
        let view = footer.view();
        expect(view).not.toEqual(null);
        expect(view).not.toBeUndefined();
        
    });

    it('should the view  has a image globant-light.svg ', () => {
        let view = footer.view();;
        expect(view).toContain('globant-light.svg');
        
    });

    
});
