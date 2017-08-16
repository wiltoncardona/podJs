

export class ContactUs{
    

    constructor(){
        this.name ='contactus';
        this.model =  {
            contact : []
        }
    }

           

    sendMessage() {
             //event.preventDefault();
            console.log('save!');
                
    }
    
    

    view(){       
        return `
                <div class="container"> 
                    <header>
						<h2>Get in Touch</h2>
					</header>
                    <form action="post" onsubmit="this.app.getComponentByName('contactus').sendMessage(event)" >
                        <label for="fname"> Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name..">

                        <label for="email">Email</label>
                        <input type="text" id="email" name="lastname" placeholder="Your email..">

                        <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="Write something.." style="height:200px"></textarea>

                        <input type="button" onclick="sendMessage()" value="Send Message">
                    </form>
                </div>

        `
    };

    controller(){
    }

    
    
  


   


}