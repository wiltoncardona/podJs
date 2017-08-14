
export class NavBar {
    constructor(){
        
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
                        </ul>                       
                    </nav>
                     <div class="icon-hamburger" onclick="myFunction()">&#9776;</div>
                </div>
           
        
         
        `

    }
}

/*

<div class="inner">
				<a href="index.html" class="logo">Globant PodsUI</a>
                <nav>
                    <ul>
                        <li> <a href="#/home">Home</a></li>
                        <li> <a href="#/team">Pod Team</a></li>
                        <li> <a href="#/mision">Mision/vision</a></li> 
                        <li> <a href="#/goals">Goals</a></li>                      
                    </ul>
                </nav>
            </div> 
            */