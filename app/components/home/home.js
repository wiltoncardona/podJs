

export class Home{
    

    constructor(){
        this.name ='home';
        this.model =  {
            home : []
        }
    }    

    view(){       
        return `
                       <h1>Welcom to My PodJs!</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe expedita doloribus, praesentium laboriosam. Vero non eius enim, vel sunt, facere voluptates hic omnis iure consequuntur itaque impedit ipsa. Esse, exercitationem!</p>

        `
    };

    controller(){
    }


   


}