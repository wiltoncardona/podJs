
export class NavBar {
    constructor(){
        
    }

    view(){
        return `
                <nav>
                    <ul>
                        <li> <a href="#/home">Home</a></li>
                        <li> <a href="#/team">Pod Team</a></li>
                        <li> <a href="#/mision">Mision/vision</a></li> 
                        <li> <a href="#/goals">Goals</a></li>                      
                    </ul>
                </nav>
        
        
        `

    }
}