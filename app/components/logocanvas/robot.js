
export class Robot  {

    constructor(canvas,context){
      this.context = context;
      this.canvas = canvas;
      this.canvas.addEventListener("mousemove", this.sayHello.bind(this), false);
      this.drawRobot(this.context);
      this.sayHelloBoll = true;
    }
    
    drawRobot(context){
    	 this.drawHead(context);
    	 this.drawEye(context);
    	 this.drawBody(context);
    	 this.drawLeftArm(context);
    	 this.drawRightArm(context);
    	 this.drawRightLeg(context);
    	 this.drawLeftLeg(context);	 
  	}
  	
  	drawHead(context){
		context.beginPath();	
		context.fillStyle = '#1c1c1c';
		context.rect(40, 5, 38, 30); // head
		context.fill();
		context.closePath();
	}

	drawEye(context){
		context.beginPath();	
		context.fillStyle = '#e5474b';
		context.arc(50, 17, 5, 0, 2 * Math.PI, false); 
		context.arc(67, 17, 5, 0, 2 * Math.PI, false); 
		context.fill();
		context.closePath();
	}

	 drawBody(context){
		context.beginPath();	
		context.fillStyle = '#1c1c1c';
		context.rect(33, 37, 50, 50); // body
		context.fill();
		context.closePath();
	}

	 drawBody(context){
		context.beginPath();	
		context.fillStyle = '#1c1c1c';
		context.rect(33, 37, 50, 50); // body
		context.fill();
		context.closePath();
	}

	 drawLeftArm(context){
		context.beginPath();	
		context.fillStyle = '#1c1c1c';
		context.rect(18, 37, 12, 37); // left arm
		context.fill();
		context.closePath();
	}
	 drawRightArm(context){
		context.beginPath();	
		context.fillStyle = '#1c1c1c';
		context.rect(86, 37, 12, 37); // right arm
		context.fill();
		context.closePath();
	}

	 drawLeftLeg(context){
		context.beginPath();	
		context.fillStyle = '#1c1c1c';
		context.rect(38, 90, 16, 50); // left leg
		context.fill();
		context.closePath();
	}
	drawRightLeg(context){
		context.beginPath();	
		context.fillStyle = '#1c1c1c';
		context.rect(60, 90, 16, 50); // right leg
		context.fill();
		context.closePath();
    }
    
    sayHello(e) {	
        console.log(e);
        console.log(e.x);
        console.log(this.canvas.height);
        console.log(this.canvas.width);

        console.log(e.y <= this.canvas.height && e.x <= this.canvas.width );
       
  		//if(e.y <= this.canvas.height && e.x <= this.canvas.width ){
        if( this.sayHelloBoll){
  			this.clearRect(86, 37, 12, 37); // right arm
            this.raisearm(this.context);
            
            this.sayHelloBoll= ! this.sayHelloBoll;
  		}else {
  			this.clearRect(86, 37, 37, 12);
            this.drawRightArm(this.context);
            this.sayHelloBoll= ! this.sayHelloBoll;  
          }
        
  	}
  	
  	clearRect(x,y,w,h){
  		this.context.clearRect(x, y, w, h);
      }
    
    raisearm(context){
		context.clearRect(86, 37, 12, 37); // right arm
		context.beginPath();
		context.fillStyle = '#e5474b';		
		context.fillRect(86, 37, 37, 12);
		context.fill();
	 	context.closePath();
	}
  	
    
}