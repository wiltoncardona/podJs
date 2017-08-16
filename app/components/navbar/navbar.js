
export class NavBar {

    constructor(){
        this.name = 'main-navbar'
    }

    view(){
        return `
                <div class="container" id="myTopnav">
                    <a href="index.html" class="logo">Globant PodsUI</a>
                    <nav>
                        <ul>
                            <li> <a href="#/home">Home</a></li>
                            <li> <a href="#/team">Pod Team</a></li>
                            <li> <a href="#/mision">Mision/vision</a></li> 
                            <li> <a href="#/goals">Goals</a></li>  
                            <li> <a href="#/contactus">Contact Us</a></li>                      
                        </ul>                       
                    </nav>
                     <div class="icon-hamburger" onclick="myFunction()">&#9776;</div>
                </div>
           
        
         
        `

    }
}