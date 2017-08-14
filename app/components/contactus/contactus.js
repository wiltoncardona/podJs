

export class ContactUs{
    

    constructor(){
        this.name ='contactus';
        this.model =  {
            home : []
        }
    }    

    view(){       
        return `
                <div class="container">
                    <header>
						<h2>Get in Touch</h2>
					</header>
                    <form action="">
                        <label for="fname"> Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name..">

                        <label for="email">Email</label>
                        <input type="text" id="email" name="lastname" placeholder="Your email..">

                        <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="Write something.." style="height:200px"></textarea>

                        <input type="submit" value="Send Message">
                    </form>
                </div>

        `
    };

    controller(){
    }


   


}