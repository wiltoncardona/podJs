import { MisionVision } from './misionVision.js';


describe('MisionVision', () => {
    let misionVision;

    beforeEach(()=> {
          misionVision = new MisionVision();
    });

    it('should create a new object MisionVision   ', () => {
        expect(misionVision).toBeDefined();
    });

    it('should MisionVision has a name  misionVision  ', () => {    
        expect(misionVision.name).toEqual('misionVision');
    });

    it('should MisionVision has a model  mision  ', () => {        
        expect(misionVision.model).toBeDefined();
        expect(misionVision.model['mision']).toBeDefined();

    });

    it('should return the view    ', () => {
        let view = misionVision.view();
        expect(view).not.toEqual(null);
        expect(view).not.toBeUndefined();
        
    });

    it('should the view  has a title  Our Vision ', () => {
        let view = misionVision.view();;
        expect(view).toContain('Our Vision');
        
    });

   
});
