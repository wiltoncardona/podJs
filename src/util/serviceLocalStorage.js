
export class StorageService {   
    
    constructor(){
        this.infoApp = new Object({
            team: [
                    {
                    id: 2,
                    firstName: 'Jack',
                    lastName: 'Sprout',
                    email: 'jack.sprout@gmail.com',
                    role: 'owner',
                    photoUrl: 'http://cdn.20m.es/img2/recortes/2012/06/26/66866-640-360.jpg'
                    },
                    {
                    id: 2,
                    firstName: 'Kenny ',
                    lastName: 'McCormick',
                    email: 'jack.sprout@gmail.com',
                    role: 'owner',
                    photoUrl: 'https://vignette2.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502'
                    },
                    {
                    id: 2,
                    firstName: 'Stan ',
                    lastName: 'Marsh',
                    email: 'jack.sprout@gmail.com',
                    role: 'owner',
                    photoUrl: 'https://vignette2.wikia.nocookie.net/southpark/images/a/a7/StanMarsh.png/revision/latest?cb=20160918033335'
                    }
                ,
                    {
                    id: 2,
                    firstName: 'Stan ',
                    lastName: 'Marsh',
                    email: 'jack.sprout@gmail.com',
                    role: 'owner',
                    photoUrl: 'https://vignette2.wikia.nocookie.net/southpark/images/a/a7/StanMarsh.png/revision/latest?cb=20160918033335'
                    }
                ],
            mision: "WE WANT TO CHALLENGE THE STATUS QUO AND BECOME THE BEST COMPANY IN THE CREATION OF DIGITAL JOURNEYS, COMBINING THE BEST OF ENGINEERING, INNOVATION AND DESIGN.",
            vision: "AT GLOBANT. The best engineers team up with our art design studios and innovation labs to deliver a superb user experience through innovation, usability, scalability and availability",
            goald: "Our goal is to be the leader in the creation of digital journeys that matter to millions of users."
        });
        this.saveData();
    }

    saveData(){
        console.log("Saving data");
        // Check browser support
        if (typeof(Storage) !== "undefined") {                
            localStorage.setItem("team", JSON.stringify(this.infoApp.team));
            localStorage.setItem("mision", JSON.stringify(this.infoApp.mision));
            localStorage.setItem("vision", JSON.stringify(this.infoApp.vision));
            localStorage.setItem("goald", JSON.stringify(this.infoApp.goald));

        } else {
            document.getElementsByClassName("error").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    }    

    getTeamMembers(){
       return  this.getItem('team');
    }
    getMision(){
       return this.getItem('mision');
    }
    getVision(){
       return this.getItem('vision');
    }
    getGoald(){
       return this.getItem('goald');
    }

    getItem(name){
        return JSON.parse(window.localStorage.getItem(name));
    }


}
