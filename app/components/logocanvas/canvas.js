


export class Canvas  {
    constructor(width,height,nameCanvas){
        this.canvas = document.getElementById(nameCanvas);
        canvas.width = width;
		canvas.height = height;
	    this.context = canvas.getContext('2d');	    	
    }
    
    getCanvas(){
      return this.canvas;
    }
    
    getContext() {
      return this.context;
    }
    
   
    
    
}